import {body} from "express-validator";
// Validering för ditt schema
export const userValidationRules = [
  body("firstName")
    .notEmpty().withMessage("Förnamn får inte vara tomt.")
    .isString().withMessage("Förnamn måste vara en sträng."),

  body("lastName")
    .notEmpty().withMessage("Efternamn får inte vara tomt.")
    .isString().withMessage("Efternamn måste vara en sträng."),

  body("email")
    .notEmpty().withMessage("E-postadress får inte vara tomt.")
    .isEmail().withMessage("Ogiltigt e-postformat."),

  body("phoneNumber")
    .notEmpty().withMessage("Telefonnummer får inte vara tomt.")
    .isNumeric().withMessage("Telefonnummer måste vara ett numeriskt värde."),


];

