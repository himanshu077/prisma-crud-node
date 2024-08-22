import express from 'express';
import * as productController from '../controllers/productController';
import { createProductValidation, updateProductValidation, createMultiProductValidation } from '../utils/validate/productValidation';
import validateMiddleware from '../utils/validate/validateMiddleware';

const router = express.Router();

router.post('/product', createProductValidation, validateMiddleware, productController.createProduct);
router.post('/products', createMultiProductValidation, validateMiddleware, productController.createManyProduct);
router.get('/products/:id', productController.getProduct);
router.get('/products', productController.getAllProducts);
router.put('/products', updateProductValidation, validateMiddleware, productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;
