"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boatController_js_1 = require("../../controllers/hobbies/boatController.js");
const boat_validator_js_1 = require("../../validations/boat-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/boats", boatController_js_1.getBoats);
router.get("/boats/:id", boatController_js_1.getBoat);
router.post("/boats", boat_validator_js_1.boatValidationRules, validationAction_js_1.validationAction, boatController_js_1.createBoat);
router.put("/boats/:id", boat_validator_js_1.boatValidationRules, validationAction_js_1.validationAction, boatController_js_1.updateBoat);
router.delete("/boats/:id", boatController_js_1.deleteBoat);
//searching
router.get("/boats/search", boatController_js_1.searchBoatsByName);
router.get("/boats/search/lowprices", boatController_js_1.searchBoatsByLowPrice);
router.get("/boats/search/highprices", boatController_js_1.searchBoatsByHighPrice);
//pagination
router.get("/boats/search/pages", boatController_js_1.getBoatsWithPagination);
exports.default = router;
