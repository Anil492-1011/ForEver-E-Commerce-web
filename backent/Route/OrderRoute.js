import express from 'express'
const router = express.Router();

import {getAllOrders, addOrder} from "../Controller/orderController.js";

router.post('/addorder', addOrder);
router.get('/get', getAllOrders)


export default router;