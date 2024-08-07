import express from "express";
import { createHouse, deleteHouse, getHouse, getHouses, searchHousesByHighPrice, updateHouse } from "../../controllers/houses/houseController.js";
import { getHobbiesWithPagination, searchHobbiesByLowPrice, searchHobbiesByName } from "../../controllers/hobbies/hobbyController.js";
import { housePropertyValidationRules } from "../../validations/house-validator.js";
import { validationAction } from "../../validations/validationAction.js";
const router = express.Router();
router.get("/houses", getHouses);
router.get("/houses/:id", getHouse);
router.post("/houses", housePropertyValidationRules, validationAction, createHouse);
router.put("/houses/:id", housePropertyValidationRules, validationAction, updateHouse);
router.delete("/houses/:id", deleteHouse);
//searching
router.get("/houses/search", searchHobbiesByName);
router.get("/houses/search/lowprices", searchHobbiesByLowPrice);
router.get("/houses/search/highprices", searchHousesByHighPrice);
//pagination
router.get("/houses/search/pages", getHobbiesWithPagination);
export default router;
