"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schema
exports.addressValidationRules = [
    (0, express_validator_1.body)("streetName")
        .notEmpty().withMessage("Gatunamn får inte vara tomt och måste vara en sträng.")
        .isString().withMessage("Gatunamn måste vara en sträng."),
    (0, express_validator_1.body)("city")
        .notEmpty().withMessage("Stad får inte vara tomt och måste vara en sträng.")
        .isString().withMessage("Stad måste vara en sträng."),
    (0, express_validator_1.body)("state")
        .notEmpty().withMessage("Stat får inte vara tomt och måste vara en sträng.")
        .isString().withMessage("Stat måste vara en sträng."),
    (0, express_validator_1.body)("postalCode")
        .notEmpty().withMessage("Postnummer får inte vara tomt och måste vara en sträng.")
        .isString().withMessage("Postnummer måste vara en sträng."),
];
