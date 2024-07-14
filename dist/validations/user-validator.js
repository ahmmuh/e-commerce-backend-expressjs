"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schema
exports.userValidationRules = [
    (0, express_validator_1.body)("firstName")
        .notEmpty().withMessage("Förnamn får inte vara tomt.")
        .isString().withMessage("Förnamn måste vara en sträng."),
    (0, express_validator_1.body)("lastName")
        .notEmpty().withMessage("Efternamn får inte vara tomt.")
        .isString().withMessage("Efternamn måste vara en sträng."),
    (0, express_validator_1.body)("email")
        .notEmpty().withMessage("E-postadress får inte vara tomt.")
        .isEmail().withMessage("Ogiltigt e-postformat."),
    (0, express_validator_1.body)("phoneNumber")
        .notEmpty().withMessage("Telefonnummer får inte vara tomt.")
        .isNumeric().withMessage("Telefonnummer måste vara ett numeriskt värde."),
];
