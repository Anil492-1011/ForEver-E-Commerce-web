import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {

  const token = req.headers?.authorization?.split(' ')[1] || req.cookies || req.body?.token // Bearer TOKEN
  console.log(token)
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authentication token missing',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    req.user = decoded;

    return next();
    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};



const isAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.role !== 'admin'){
      console.log(req.user.role )
         return res.status(401).json({
                success: false,
                message: "This is a protect route for Admins,you can not access it"
            })
        }
        next();
    }catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admins only.',
    });
  }
} 

export { isAdmin, authenticate };
