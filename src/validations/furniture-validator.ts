import {body} from "express-validator";
export const furnitureValidationRules  = [
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

  body("location.address").optional().isString().withMessage("Adressen måste vara en sträng."),

  body("location.coordinates.lat").optional().isNumeric().withMessage("Latituden måste vara ett numeriskt värde.")
  ,
  body("location.coordinates.lng").optional().isNumeric().withMessage("Longituden måste vara ett numeriskt värde."),

  body("category").notEmpty().withMessage("Du måste välja en kategori"),

  body("user").notEmpty().withMessage("Du måste logga in för att kunna" +
    " lägga till produkt (er)"),
];

