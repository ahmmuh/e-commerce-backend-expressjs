"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.housePropertyValidationRules = void 0;
const express_validator_1 = require("express-validator");
// Validation rules for HousePropertySchema
exports.housePropertyValidationRules = [
    (0, express_validator_1.body)("houseType")
        .notEmpty().withMessage("Typ av hus får inte vara tomt.")
        .isString().withMessage("Typ av hus måste vara en sträng."),
    (0, express_validator_1.body)("yearBuilt")
        .isNumeric().withMessage("Byggår måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("squareMeters")
        .notEmpty().withMessage("Kvadratmeter får inte vara tomt.")
        .isString().withMessage("Kvadratmeter måste vara en sträng."),
    (0, express_validator_1.body)("price")
        .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
        .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
    (0, express_validator_1.body)("rooms")
        .isNumeric().withMessage("Antal rum måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("toilets")
        .isNumeric().withMessage("Antal toaletter måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("user")
        .notEmpty().withMessage("Användar-ID får inte vara tomt.")
        .isMongoId().withMessage("Användar-ID måste vara en giltig MongoDB-identifikator."),
    (0, express_validator_1.body)("address")
        .notEmpty().withMessage("Adress-ID får inte vara tomt.")
        .isMongoId().withMessage("Adress-ID måste vara en giltig MongoDB-identifikator."),
    (0, express_validator_1.body)("location.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("location.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
