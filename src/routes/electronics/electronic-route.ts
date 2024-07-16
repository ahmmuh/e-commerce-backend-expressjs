import express from "express";
import {
  createElectronic,
  deleteElectronic,
  getElectronic,
  getElectronics,
  updateElectronic,
  searchByName,
  searchByLowPrice,
  getElectronicsByReciepts,
  searchByHighPrice,
  getNewElectronics,
  getElectronicsWithLargeScreen,
  getElectronicsWithMediumScreen,
  getElectronicsWithSmallScreen,
  getElectronicsWithPagination
} from "../../controllers/electronics/electronicController.js";
import {
  electronicValidationRules
} from "../../validations/electronic-validator.js";
import { validationAction } from "../../validations/validationAction.js";


const router = express.Router();


//crud routes
router.get("/electronics", getElectronics);
router.get("/electronics/:id", getElectronic);
router.post("/electronics",
  electronicValidationRules,
  validationAction, createElectronic);
router.put("/electronics/:id", electronicValidationRules,validationAction
  ,updateElectronic);
router.delete("/electronics/:id", deleteElectronic);

//searching

router.get("/electronics/search", electronicValidationRules,validationAction, searchByName );
router.get("/electronics/search/lowprices", electronicValidationRules,validationAction ,searchByLowPrice );
router.get("/electronics/search/highprices", electronicValidationRules,validationAction,searchByHighPrice );
router.get("/electronics/search/newelectronics", electronicValidationRules,validationAction,getNewElectronics );
router.get("/electronics/search/reciepts", electronicValidationRules,validationAction,getElectronicsByReciepts );


//screen sizes
router.get("/electronics/search/largescreens", electronicValidationRules,validationAction,getElectronicsWithLargeScreen );
router.get("/electronics/search/mediumscreens", electronicValidationRules,validationAction,getElectronicsWithMediumScreen );
router.get("/electronics/search/smallscreens", electronicValidationRules,validationAction,getElectronicsWithSmallScreen );


//pagination
router.get("/electronics/search/pages", electronicValidationRules,validationAction,getElectronicsWithPagination );



export default router;
