const User  =require('../Model/UserModel');

exports.Signup = async (req, res) => {
    try{
        const { Name, Email, Password } = req.body;

        if(!Name || !Email || !Password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({Email})
        if(existingUser){
            return res.status(400).json({
                message: "User already exists. Please login.",
                success: false
            })
        }
        const newUser = new User({Name, Email, Password});
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: newUser
        });

    }catch(error){
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}