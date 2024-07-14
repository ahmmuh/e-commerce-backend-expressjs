"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hobbyValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schemae
exports.hobbyValidationRules = [
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
    (0, express_validator_1.body)("user")
        .notEmpty().withMessage("Användar-ID får inte vara tomt.")
        .isMongoId().withMessage("Användar-ID måste vara en giltig MongoDB-identifikator."),
    (0, express_validator_1.body)("location.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("location.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
