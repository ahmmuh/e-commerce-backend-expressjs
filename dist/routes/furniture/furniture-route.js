"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const furnitureController_js_1 = require("../../controllers/furniture/furnitureController.js");
const furniture_validator_js_1 = require("../../validations/furniture-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/furnitures", furnitureController_js_1.getFurnitures);
router.get("/furnitures/:id", furnitureController_js_1.getFurniture);
router.post("/furnitures", furniture_validator_js_1.furnitureValidationRules, validationAction_js_1.validationAction, furnitureController_js_1.createFurniture);
router.put("/furnitures/:id", furniture_validator_js_1.furnitureValidationRules, validationAction_js_1.validationAction, furnitureController_js_1.updateFurniture);
router.delete("/furnitures/:id", furnitureController_js_1.deleteFurniture);
//searching
router.get("/furnitures/search", furnitureController_js_1.searchFurnituresByName);
router.get("/furnitures/search/lowprices", furnitureController_js_1.searchFurnituresByHighPrice);
router.get("/furnitures/search/highprices", furnitureController_js_1.searchFurnituresByHighPrice);
//pagination
router.get("/furnitures/search/pages", furnitureController_js_1.getFurnituresWithPagination);
exports.default = router;
