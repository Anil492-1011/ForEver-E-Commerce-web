import express from 'express';
import { addProduct, listProducts, removeProduct, singleProduct ,getAllProducts } from '../Controller/ProductController.js';
import upload from '../Middleware/multer.js';
const router = express.Router();

router.post('/add',
  upload.fields([
    { name: "images", maxCount: 4 },]),
   addProduct
);

router.get('/all', getAllProducts);
router.get('/list', listProducts);
router.delete('/remove/:id', removeProduct);
router.get('/single/:id', singleProduct);


export default router;