"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const electronicController_js_1 = require("../../controllers/electronics/electronicController.js");
const electronic_validator_js_1 = require("../../validations/electronic-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
//crud routes
router.get("/electronics", electronicController_js_1.getElectronics);
router.get("/electronics/:id", electronicController_js_1.getElectronic);
router.post("/electronics", electronic_validator_js_1.electronicValidationRules, validationAction_js_1.validationAction, electronicController_js_1.createElectronic);
router.put("/electronics/:id", electronic_validator_js_1.electronicValidationRules, validationAction_js_1.validationAction, electronicController_js_1.updateElectronic);
router.delete("/electronics/:id", electronicController_js_1.deleteElectronic);
//searching
router.get("/electronics/search", electronicController_js_1.searchByName);
router.get("/electronics/search/lowprices", electronicController_js_1.searchByLowPrice);
router.get("/electronics/search/highprices", electronicController_js_1.searchByHighPrice);
router.get("/electronics/search/newelectronics", electronicController_js_1.getNewElectronics);
router.get("/electronics/search/reciepts", electronicController_js_1.getElectronicsByReciepts);
//screen sizes
router.get("/electronics/search/largescreens", electronicController_js_1.getElectronicsWithLargeScreen);
router.get("/electronics/search/mediumscreens", electronicController_js_1.getElectronicsWithMediumScreen);
router.get("/electronics/search/smallscreens", electronicController_js_1.getElectronicsWithSmallScreen);
//pagination
router.get("/electronics/search/pages", electronicController_js_1.getElectronicsWithPagination);
exports.default = router;
