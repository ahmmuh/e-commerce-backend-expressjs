"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const houseController_js_1 = require("../../controllers/houses/houseController.js");
const hobbyController_js_1 = require("../../controllers/hobbies/hobbyController.js");
const house_validator_js_1 = require("../../validations/house-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/houses", houseController_js_1.getHouses);
router.get("/houses/:id", houseController_js_1.getHouse);
router.post("/houses", house_validator_js_1.housePropertyValidationRules, validationAction_js_1.validationAction, houseController_js_1.createHouse);
router.put("/houses/:id", house_validator_js_1.housePropertyValidationRules, validationAction_js_1.validationAction, houseController_js_1.updateHouse);
router.delete("/houses/:id", houseController_js_1.deleteHouse);
//searching
router.get("/houses/search", hobbyController_js_1.searchHobbiesByName);
router.get("/houses/search/lowprices", hobbyController_js_1.searchHobbiesByLowPrice);
router.get("/houses/search/highprices", houseController_js_1.searchHousesByHighPrice);
//pagination
router.get("/houses/search/pages", hobbyController_js_1.getHobbiesWithPagination);
exports.default = router;
