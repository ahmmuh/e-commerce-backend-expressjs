"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clothController_js_1 = require("../../controllers/clothes/clothController.js");
const multer_1 = __importDefault(require("multer"));
const cloth_validator_js_1 = require("../../validations/cloth-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
const uploadFile = (0, multer_1.default)({ dest: "uploads/" });
router.get("/clothes", clothController_js_1.getClothes);
router.get("/clothes/:id", clothController_js_1.getCloth);
router.post("/clothes", uploadFile.single("thumbnail"), cloth_validator_js_1.clothValidationRules, validationAction_js_1.validationAction, clothController_js_1.createCloth);
router.put("/clothes/:id", cloth_validator_js_1.clothValidationRules, validationAction_js_1.validationAction, clothController_js_1.updateCloth);
router.delete("/clothes/:id", clothController_js_1.deleteCloth);
exports.default = router;
