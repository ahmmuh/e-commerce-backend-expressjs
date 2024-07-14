"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validering för ditt schema
exports.vehicleValidationRules = [
    (0, express_validator_1.body)("manufacturer")
        .notEmpty().withMessage("Tillverkare får inte vara tomt.")
        .isString().withMessage("Tillverkare måste vara en sträng."),
    (0, express_validator_1.body)("model")
        .notEmpty().withMessage("Modell får inte vara tomt.")
        .isString().withMessage("Modell måste vara en sträng."),
    (0, express_validator_1.body)("color")
        .notEmpty().withMessage("Färg får inte vara tomt.")
        .isString().withMessage("Färg måste vara en sträng."),
    (0, express_validator_1.body)("year")
        .notEmpty().withMessage("År får inte vara tomt.")
        .isNumeric().withMessage("År måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("mileage")
        .notEmpty().withMessage("Miltal får inte vara tomt.")
        .isNumeric().withMessage("Miltal måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("fuelType")
        .notEmpty().withMessage("Bränsletyp får inte vara tomt.")
        .isString().withMessage("Bränsletyp måste vara en sträng."),
    (0, express_validator_1.body)("horsepower")
        .notEmpty().withMessage("Hästkrafter får inte vara tomt.")
        .isNumeric().withMessage("Hästkrafter måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("price")
        .notEmpty().withMessage("Pris får inte vara tomt.")
        .isNumeric().withMessage("Pris måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
