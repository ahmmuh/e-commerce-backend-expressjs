import { body } from "express-validator";
export const boatValidationRules = [
    body("name")
        .notEmpty().withMessage("Namnet får inte vara tomt.")
        .isString().withMessage("Namnet måste vara en sträng."),
    body("model")
        .notEmpty().withMessage("Modellen får inte vara tomt.")
        .isString().withMessage("Modellen måste vara en sträng."),
    body("description")
        .notEmpty().withMessage("Beskrivningen får inte vara tomt.")
        .isString().withMessage("Beskrivningen måste vara en sträng."),
    body("image.data").optional().isBase64().withMessage("Bilddata måste vara i Base64-format."),
    body("image.contentType").optional().isString().withMessage("Bildtypen måste vara en sträng."),
    body("price")
        .isNumeric().withMessage("Priset måste vara ett numeriskt värde.")
        .custom((value) => value >= 0).withMessage("Priset får inte vara negativt."),
    body("category").notEmpty().withMessage("Du måste välja en kategori"),
    body("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
