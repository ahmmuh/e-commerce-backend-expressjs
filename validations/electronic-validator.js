import {body, validationResult} from "express-validator";
import mongoose from "mongoose";

export const electronicData =[
  body("name").notEmpty().withMessage("Namnet är ett obligatoriskt fält." +
    " Vänligen ange ett namn för din elektroniska enhet."),
  body("description").notEmpty().withMessage("Beskrivningen är obligatorisk. Ge en kortfattad beskrivning av enheten, inklusive dess funktioner och egenskaper."),
  body("price").notEmpty().isNumeric().withMessage("Ange ett pris för din elektroniska" +
  " enhet. Detta bör vara ett numeriskt värde."),
  body("batteryHealth").notEmpty().withMessage("Batterihälsa är ett obligatoriskt fält. Ange batteriets aktuella hälsotillstånd, t.ex. ‘bra’, ‘medel’ eller ‘dåligt’"),
  body("screenSize").notEmpty().withMessage("Ange den faktiska skärmstorleken för enheten, t.ex. ‘5 tum’ eller ‘15,6 tum’."),
  body("colors").notEmpty().withMessage("Välj minst en färg som enheten finns tillgänglig i. Om flera färger, separera dem med kommatecken."),
  body("condition").notEmpty().withMessage("Tillståndet är obligatoriskt. Ange om enheten är ‘ny’, ‘använd’, ‘renoverad’ eller något annat."),
  body("receipt").notEmpty().withMessage("Ange om det finns ett kvitto för" +
    " enheten. Detta kan vara en bild eller en textbeskrivning, du måste" +
    " kunna bevisa det vid köpet"),
  body("ownershipDuration").notEmpty().withMessage("Ange hur länge du har ägt enheten. Till exempel ‘6 månader’ eller ‘2 år’."),
  body("location").notEmpty().withMessage("Ange platsen där enheten finns tillgänglig. Detta kan vara en stad, ett område eller en adress."),
  body("thumbnailImage").notEmpty().withMessage("Lägg till en miniatyrbild för att representera enheten. Detta bör vara en bildfil"),

]



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


