import {body} from 'express-validator';

export const addressValidationRules = [
  body("streetName")
    .notEmpty().withMessage("Gatunamn får inte vara tomt och måste vara en sträng."),

  body("city")
    .notEmpty().withMessage("Stad får inte vara tomt och måste vara en sträng."),

  body("state")
    .notEmpty().withMessage("Stat får inte vara tomt och måste vara en sträng."),

  body("postalCode")
    .optional().isString().withMessage("Postnummer måste vara en sträng."),

  body("buildingNumber")
    .optional().isNumeric().withMessage("Byggnadsnummer måste vara ett nummer."),

  body("user")
    .notEmpty().withMessage("Användar-ID får inte vara tomt och måste vara en sträng."),
];

