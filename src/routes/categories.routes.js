import { Router } from "express";
import categoriesController from "../controllers/categories.controller.js"

const router = Router();

router.get('/categories', categoriesController.getAllCategories)

router.get('/categories/:id', categoriesController.getOneCategory)

router.post('/categories', categoriesController.createNewCategory)

router.delete('/categories/:id', categoriesController.deleteCategory)

router.put('/categories/:id', categoriesController.updateCategory)

export default router