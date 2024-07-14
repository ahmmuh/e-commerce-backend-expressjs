import { body } from "express-validator";

// Validering för ditt schema
export const addressValidationRules = [
  body("streetName")
    .notEmpty().withMessage("Gatunamn får inte vara tomt och måste vara en sträng.")
    .isString().withMessage("Gatunamn måste vara en sträng."),

  body("city")
    .notEmpty().withMessage("Stad får inte vara tomt och måste vara en sträng.")
    .isString().withMessage("Stad måste vara en sträng."),

  body("state")
    .notEmpty().withMessage("Stat får inte vara tomt och måste vara en sträng.")
    .isString().withMessage("Stat måste vara en sträng."),

  body("postalCode")
    .notEmpty().withMessage("Postnummer får inte vara tomt och måste vara en sträng.")
    .isString().withMessage("Postnummer måste vara en sträng."),
];

