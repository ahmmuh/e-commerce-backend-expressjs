"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.furnitureValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schema
exports.furnitureValidationRules = [
    (0, express_validator_1.body)("name")
        .notEmpty().withMessage("Namnet får inte vara tomt.")
        .isString().withMessage("Namnet måste vara en sträng."),
    (0, express_validator_1.body)("description")
        .notEmpty().withMessage("Beskrivningen får inte vara tomt.")
        .isString().withMessage("Beskrivningen måste vara en sträng."),
    (0, express_validator_1.body)("images")
        .isArray().withMessage("Det måste finnas minst en bild."),
    (0, express_validator_1.body)("price")
        .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
        .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
    (0, express_validator_1.body)("location.address").optional().isString().withMessage("Adressen måste vara en sträng."),
    (0, express_validator_1.body)("location.coordinates.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("location.coordinates.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
