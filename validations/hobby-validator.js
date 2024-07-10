import {body} from "express-validator";
// Validering för ditt schemae
export const hobbyValidationRules = [
  body("name")
    .notEmpty().withMessage("Namnet får inte vara tomt.")
    .isString().withMessage("Namnet måste vara en sträng."),
  body("description")
    .notEmpty().withMessage("Beskrivningen får inte vara tomt.")
    .isString().withMessage("Beskrivningen måste vara en sträng."),
  body("images")
    .isArray().withMessage("Det måste finnas minst en bild."),
  body("price")
    .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
    .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
  body("user")
    .notEmpty().withMessage("Användar-ID får inte vara tomt.")
    .isMongoId().withMessage("Användar-ID måste vara en giltig MongoDB-identifikator."),
  body("location.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde."),
  body("location.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),
];

