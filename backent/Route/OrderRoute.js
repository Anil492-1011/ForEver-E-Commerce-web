import express from 'express'
const router = express.Router();
import {isAdmin, authenticate} from "../Middleware/auth.js"
import {createProduct, getAllOrders} from "../Controller/orderController.js"

router.get('/getorders',authenticate,isAdmin, getAllOrders);
router.post('/add',authenticate,isAdmin, createProduct);


export default router;