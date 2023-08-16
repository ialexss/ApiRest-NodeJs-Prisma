import { Router } from "express";
import productsController from '../controllers/products.controller.js'

const router = Router();

router.get('/products', productsController.getAllProducts)

router.get('/products/:id', productsController.getOneProduct)

router.post('/products', productsController.createNewProduct)

router.delete('/products/:id', productsController.deleteProduct)

router.put('/products/:id', productsController.updateProduct)

export default router