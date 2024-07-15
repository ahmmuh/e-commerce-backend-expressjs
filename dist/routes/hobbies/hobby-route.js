import express from "express";
import { createHobby, deleteHobby, getHobbies, getHobbiesWithPagination, getHobby, searchHobbiesByHighPrice, searchHobbiesByLowPrice, searchHobbiesByName, updateHobby } from "../../controllers/hobbies/hobbyController.js";
import { hobbyValidationRules } from "../../validations/hobby-validator.js";
import { validationAction } from "../../validations/validationAction.js";
const router = express.Router();
router.get("/hobbies", getHobbies);
router.get("/hobbies/:id", getHobby);
router.post("/hobbies", hobbyValidationRules, validationAction, createHobby);
router.put("/hobbies/:id", hobbyValidationRules, validationAction, updateHobby);
router.delete("/hobbies/:id", deleteHobby);
//searching
router.get("/hobbies/search", searchHobbiesByName);
router.get("/hobbies/search/lowprices", searchHobbiesByLowPrice);
router.get("/hobbies/search/highprices", searchHobbiesByHighPrice);
//pagination
router.get("/hobbies/search/pages", getHobbiesWithPagination);
export default router;
