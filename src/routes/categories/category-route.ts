import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,

} from "../../controllers/category/categoryController.js";
import {
  categoryValidationRules
} from "../../validations/category-validator.js";
import { validationAction } from "../../validations/validationAction.js";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", categoryValidationRules,validationAction
  ,createCategory);
router.put("/categories/:id", categoryValidationRules,validationAction,updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
