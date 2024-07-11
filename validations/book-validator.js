import {body} from "express-validator";
// Validering för ditt schema
export const bookValidationRules = [
  body("author")
    .notEmpty().withMessage("Författaren får inte vara tomt.")
    .isString().withMessage("Författaren måste vara en sträng."),

  body("name")
    .notEmpty().withMessage("Namnet får inte vara tomt.")
    .isString().withMessage("Namnet måste vara en sträng."),

  body("isbn")
    .notEmpty().withMessage("ISBN får inte vara tomt.")
    .isNumeric().withMessage("ISBN måste vara ett numeriskt värde."),

  body("description")
    .notEmpty().withMessage("Beskrivningen får inte vara tomt.")
    .isString().withMessage("Beskrivningen måste vara en sträng."),

  body("image.data").optional().isBase64().withMessage("Bilddata måste vara i Base64-format."),

  body("image.contentType").optional().isString().withMessage("Bildtypen måste vara en sträng."),
  body("category").notEmpty().withMessage("Du måste välja en kategori"),
  body("user").notEmpty().withMessage("Du måste logga in för att kunna" +
    " lägga till produkt (er)"),
  body("price")
    .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
    .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
];

