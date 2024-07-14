"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryController_js_1 = require("../../controllers/category/categoryController.js");
const category_validator_js_1 = require("../../validations/category-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/categories", categoryController_js_1.getCategories);
router.get("/categories/:id", categoryController_js_1.getCategory);
router.post("/categories", category_validator_js_1.categoryValidationRules, validationAction_js_1.validationAction, categoryController_js_1.createCategory);
router.put("/categories/:id", categoryController_js_1.updateCategory);
router.delete("/categories/:id", categoryController_js_1.deleteCategory);
exports.default = router;
