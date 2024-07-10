import {body} from "express-validator";
// Validation rules for HousePropertySchema
export const housePropertyValidationRules = [

  body("houseType")
    .notEmpty().withMessage("Typ av hus får inte vara tomt.")
    .isString().withMessage("Typ av hus måste vara en sträng."),

  body("yearBuilt")
    .isNumeric().withMessage("Byggår måste vara ett numeriskt värde."),

  body("squareMeters")
    .notEmpty().withMessage("Kvadratmeter får inte vara tomt.")
    .isString().withMessage("Kvadratmeter måste vara en sträng."),

  body("price")
    .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
    .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),

  body("rooms")
    .isNumeric().withMessage("Antal rum måste vara ett numeriskt värde."),

  body("toilets")
    .isNumeric().withMessage("Antal toaletter måste vara ett numeriskt värde."),

  body("user")
    .notEmpty().withMessage("Användar-ID får inte vara tomt.")
    .isMongoId().withMessage("Användar-ID måste vara en giltig MongoDB-identifikator."),

  body("address")
    .notEmpty().withMessage("Adress-ID får inte vara tomt.")
    .isMongoId().withMessage("Adress-ID måste vara en giltig MongoDB-identifikator."),

  body("location.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde."),

  body("location.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),
];

