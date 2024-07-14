"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clothValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.clothValidationRules = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Namnet är obligatoriskt."),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Beskrivningen är obligatorisk."),
    (0, express_validator_1.body)("images").isArray({ min: 1 }).withMessage("Lägg till minst en bild."),
    (0, express_validator_1.body)("price")
        .notEmpty().withMessage("Ange ett pris.")
        .isFloat({ min: 0 }).withMessage("Priset måste vara ett positivt tal."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
    (0, express_validator_1.body)("thumbnail").notEmpty().withMessage("Lägg till en miniatyrbild."),
];
