import { body } from "express-validator";

export const clothValidationRules = [
  body("name").notEmpty().withMessage("Namnet är obligatoriskt."),

  body("description").notEmpty().withMessage("Beskrivningen är obligatorisk."),

  body("images").isArray({ min: 1 }).withMessage("Lägg till minst en bild."),

  body("price")
    .notEmpty().withMessage("Ange ett pris.")
    .isFloat({ min: 0 }).withMessage("Priset måste vara ett positivt tal."),
    body("category").notEmpty().withMessage("Du måste välja en kategori"),
    body("user").notEmpty().withMessage("Du måste logga in för att kunna" +
      " lägga till produkt (er)"),
  body("thumbnail").notEmpty().withMessage("Lägg till en miniatyrbild."),
];


