import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {

  const token = req.headers?.authorization?.split(' ')[1] || req.cookies || req.body?.token // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authentication token missing',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

 export default authenticate;