"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = require("../../controllers/users/user-controller.js");
const user_validator_js_1 = require("../../validations/user-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/users", user_controller_js_1.getUsers);
router.get("/users/:id", user_controller_js_1.getUser);
router.post("/users", user_validator_js_1.userValidationRules, validationAction_js_1.validationAction, user_controller_js_1.createUser);
router.put("/users/:id", user_validator_js_1.userValidationRules, validationAction_js_1.validationAction, user_controller_js_1.updateUser);
router.delete("/users/:id", user_controller_js_1.deleteUser);
router.delete("/users", user_controller_js_1.countUsers);
//searching
router.get("/users/search", user_controller_js_1.searchUsersByName);
//pagination
router.get("/users/search/pages", user_controller_js_1.getUsersWithPagination);
exports.default = router;
