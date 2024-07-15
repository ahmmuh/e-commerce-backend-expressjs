import express from "express";
import { createFurniture, deleteFurniture, getFurniture, getFurnitures, getFurnituresWithPagination, searchFurnituresByHighPrice, searchFurnituresByName, updateFurniture } from "../../controllers/furniture/furnitureController.js";
import { furnitureValidationRules } from "../../validations/furniture-validator.js";
import { validationAction } from "../../validations/validationAction.js";
const router = express.Router();
router.get("/furnitures", getFurnitures);
router.get("/furnitures/:id", getFurniture);
router.post("/furnitures", furnitureValidationRules, validationAction, createFurniture);
router.put("/furnitures/:id", furnitureValidationRules, validationAction, updateFurniture);
router.delete("/furnitures/:id", deleteFurniture);
//searching
router.get("/furnitures/search", searchFurnituresByName);
router.get("/furnitures/search/lowprices", searchFurnituresByHighPrice);
router.get("/furnitures/search/highprices", searchFurnituresByHighPrice);
//pagination
router.get("/furnitures/search/pages", getFurnituresWithPagination);
export default router;
