"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boatValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schemae
exports.boatValidationRules = [
    (0, express_validator_1.body)("name")
        .notEmpty().withMessage("Namnet får inte vara tomt.")
        .isString().withMessage("Namnet måste vara en sträng."),
    (0, express_validator_1.body)("model")
        .notEmpty().withMessage("Modellen får inte vara tomt.")
        .isString().withMessage("Modellen måste vara en sträng."),
    (0, express_validator_1.body)("description")
        .notEmpty().withMessage("Beskrivningen får inte vara tomt.")
        .isString().withMessage("Beskrivningen måste vara en sträng."),
    (0, express_validator_1.body)("image.data").optional().isBase64().withMessage("Bilddata måste vara i Base64-format."),
    (0, express_validator_1.body)("image.contentType").optional().isString().withMessage("Bildtypen måste vara en sträng."),
    (0, express_validator_1.body)("price")
        .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
        .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
