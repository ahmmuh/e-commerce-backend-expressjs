import {body} from "express-validator";

export const categoryValidationRules = [
  body("name")
    .notEmpty().withMessage("Namnet får inte vara tomt. Vänligen ange ett namn")
    .isString().withMessage("Namnet måste vara en textsträng. Vänligen ange ett giltigt namn."),

  body("icon")
    .notEmpty().withMessage("Ikon får inte vara tomt.")
    .isString().withMessage("Ikonen måste vara en textsträng. Vänligen ange en giltig ikon."),

  body("color")
    .notEmpty().withMessage("Färgen får inte vara tomt. Vänligen ange en färg")
    .isString().withMessage("Färgen måste vara en textsträng. Vänligen ange en giltig färg."),

  body("user").notEmpty().withMessage("Du måste logga in för att kunna lägga" +
    " till kategori"),

];




