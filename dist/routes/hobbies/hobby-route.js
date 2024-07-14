"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hobbyController_js_1 = require("../../controllers/hobbies/hobbyController.js");
const hobby_validator_js_1 = require("../../validations/hobby-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/hobbies", hobbyController_js_1.getHobbies);
router.get("/hobbies/:id", hobbyController_js_1.getHobby);
router.post("/hobbies", hobby_validator_js_1.hobbyValidationRules, validationAction_js_1.validationAction, hobbyController_js_1.createHobby);
router.put("/hobbies/:id", hobby_validator_js_1.hobbyValidationRules, validationAction_js_1.validationAction, hobbyController_js_1.updateHobby);
router.delete("/hobbies/:id", hobbyController_js_1.deleteHobby);
//searching
router.get("/hobbies/search", hobbyController_js_1.searchHobbiesByName);
router.get("/hobbies/search/lowprices", hobbyController_js_1.searchHobbiesByLowPrice);
router.get("/hobbies/search/highprices", hobbyController_js_1.searchHobbiesByHighPrice);
//pagination
router.get("/hobbies/search/pages", hobbyController_js_1.getHobbiesWithPagination);
exports.default = router;
