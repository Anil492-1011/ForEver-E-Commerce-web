import express from 'express';
const router = express.Router();
import { Signup, Login, Logout } from '../Controller/authController.js';    
import { authenticate } from '../Middleware/auth.js';
import { isAdmin } from '../Middleware/auth.js';

router.post('/signup', Signup);
router.post('/login', Login);   
router.post('/logout', Logout);
router.get("/admin", authenticate, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});
 
export default router;