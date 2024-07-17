import { body } from "express-validator";
export const vehicleValidationRules = [
    body("manufacturer")
        .notEmpty().withMessage("Tillverkare får inte vara tomt.")
        .isString().withMessage("Tillverkare måste vara en sträng."),
    body("model")
        .notEmpty().withMessage("Modell får inte vara tomt.")
        .isString().withMessage("Modell måste vara en sträng."),
    body("color")
        .notEmpty().withMessage("Färg får inte vara tomt.")
        .isString().withMessage("Färg måste vara en sträng."),
    body("year")
        .notEmpty().withMessage("År får inte vara tomt.")
        .isNumeric().withMessage("År måste vara ett numeriskt värde."),
    body("mileage")
        .notEmpty().withMessage("Miltal får inte vara tomt.")
        .isNumeric().withMessage("Miltal måste vara ett numeriskt värde."),
    body("fuelType")
        .notEmpty().withMessage("Bränsletyp får inte vara tomt.")
        .isString().withMessage("Bränsletyp måste vara en sträng."),
    body("horsepower")
        .notEmpty().withMessage("Hästkrafter får inte vara tomt.")
        .isNumeric().withMessage("Hästkrafter måste vara ett numeriskt värde."),
    body("price")
        .notEmpty().withMessage("Pris får inte vara tomt.")
        .isNumeric().withMessage("Pris måste vara ett numeriskt värde."),
    body("category").notEmpty().withMessage("Du måste välja en kategori"),
    body("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
