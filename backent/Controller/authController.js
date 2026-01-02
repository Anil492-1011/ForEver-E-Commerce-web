import User from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const buildCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 3 * 24 * 60 * 60 * 1000,
});

const formatUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
   
});


const Signup = async (req, res) => {
    try{
        const { name, email, password} = req.body;

        if(!name || !email || !password ){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message: "User already exists. Please login.",
                success: false
            })
        }
        if(password.length < 6){
            return res.status(400).json({
                message: "Password must be at least 6 characters long",
                success: false
            })
        }
        if(!/\S+@\S+\.\S+/.test(email)){
            return res.status(400).json({
                message: "Invalid email format",
                success: false
            })
        }

        let hashedPassword =await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        const payload = {id: user._id, email: user.email };

        const token =  jwt.sign(payload, process.env.JWT_SECRET, {
             expiresIn: process.env.JWT_EXPIRES_IN || '1h'});


        res.cookie('token', token, buildCookieOptions());

        res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: formatUser(user),
            token: token
        });

    }catch(error){
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const Login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({
                message: "User does not exist. Please signup.",
                success: false
            })
        }
        
        let isPasswordMatch = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const payload = {id: existingUser._id, email: existingUser.email};
 
        const token =  jwt.sign(payload, process.env.JWT_SECRET, {
             expiresIn: process.env.JWT_EXPIRES_IN || '1h'});


        res.cookie('token', token, buildCookieOptions());

        res.status(201).json({
            message: "User successfully Logged In",
            success: true,
            user: formatUser(existingUser)
        });


    }catch(error){
        console.error("Error during Login:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        }) 
    }
}

const Logout = async (req, res)=>{
    try{
        res.clearCookie('token');
        res.status(200).json({
        message: "User successfully logged out",
        success: true
    })
    }catch(error){
        console.error("Error during Logout:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        }) 
    } 
       
}

const adminLogin = async (req, res) => {
    try{
        const {email, password} = req.body;
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if(email !== adminEmail || password !== adminPassword){
            return res.status(401).json({
                message: "Invalid admin credentials",
                success: false
            });
        }
        const payload = {email: adminEmail, role: 'admin'};

        const token =  jwt.sign(payload, process.env.JWT_SECRET, {
             expiresIn: process.env.JWT_EXPIRES_IN || '1h'});
        res.cookie('token', token, buildCookieOptions());

        res.status(200).json({
            message: "Admin successfully logged in",
            success: true,
            token: token
        });
    }catch(error){
        console.error("Error during admin Login:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        }) 
    }
}

export { Signup, Login, Logout, adminLogin };