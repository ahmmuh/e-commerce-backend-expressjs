"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.electronicValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.electronicValidationRules = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Namnet är ett obligatoriskt fält." +
        " Vänligen ange ett namn för din elektroniska enhet."),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Beskrivningen är obligatorisk. Ge en kortfattad beskrivning av enheten, inklusive dess funktioner och egenskaper."),
    (0, express_validator_1.body)("price").notEmpty().withMessage("Ange ett pris för din" +
        " elektroniska").isFloat({ min: 0 }).withMessage("Priset måste vara ett positivt tal."),
    (0, express_validator_1.body)("batteryHealth").notEmpty().withMessage("Batterihälsa är ett obligatoriskt fält. Ange batteriets aktuella hälsotillstånd, t.ex. ‘bra’, ‘medel’ eller ‘dåligt’"),
    (0, express_validator_1.body)("screenSize").notEmpty().withMessage("Ange den" +
        " faktiska" +
        " skärmstorleken för enheten, t.ex. ‘5 tum’ eller ‘15,6 tum’."),
    (0, express_validator_1.body)("colors").notEmpty().withMessage("Välj minst en färg som enheten finns tillgänglig i. Om flera färger, separera dem med kommatecken."),
    (0, express_validator_1.body)("condition").notEmpty().withMessage("Tillståndet är obligatoriskt. Ange om enheten är ‘ny’, ‘använd’, ‘renoverad’ eller något annat."),
    (0, express_validator_1.body)("images")
        .isArray().withMessage("Det måste finnas minst en bild."),
    (0, express_validator_1.body)("receipt").notEmpty().withMessage("Ange om det finns ett kvitto för" +
        " enheten. Detta kan vara en bild eller en textbeskrivning, du måste" +
        " kunna bevisa det vid köpet"),
    (0, express_validator_1.body)("ownershipDuration").notEmpty().withMessage("Ange hur länge du har ägt enheten. Till exempel ‘6 månader’ eller ‘2 år’."),
    (0, express_validator_1.body)("location").notEmpty().withMessage("Ange platsen där enheten finns tillgänglig. Detta kan vara en stad, ett område eller en adress."),
    (0, express_validator_1.body)("thumbnailImage").notEmpty().withMessage("Lägg till en miniatyrbild för att representera enheten. Detta bör vara en bildfil"),
    (0, express_validator_1.body)("category").notEmpty().withMessage("Du måste välja en kategori"),
    (0, express_validator_1.body)("user").notEmpty().withMessage("Du måste logga in för att kunna" +
        " lägga till produkt (er)"),
];
// user: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "User",
//   required: true,
// },
// category: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Category",
//   required: true,
// },
//images: [{ type: Array, required: true }],
