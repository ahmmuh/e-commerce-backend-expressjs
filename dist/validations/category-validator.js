"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.categoryValidationRules = [
    (0, express_validator_1.body)("name")
        .notEmpty().withMessage("Namnet får inte vara tomt. Vänligen ange ett namn")
        .isString().withMessage("Namnet måste vara en textsträng. Vänligen ange ett giltigt namn."),
    (0, express_validator_1.body)("icon")
        .notEmpty().withMessage("Ikon får inte vara tomt.")
        .isString().withMessage("Ikonen måste vara en textsträng. Vänligen ange en giltig ikon."),
    (0, express_validator_1.body)("color")
        .notEmpty().withMessage("Färgen får inte vara tomt. Vänligen ange en färg")
        .isString().withMessage("Färgen måste vara en textsträng. Vänligen ange en giltig färg."),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna lägga" +
        " till kategori"),
];
