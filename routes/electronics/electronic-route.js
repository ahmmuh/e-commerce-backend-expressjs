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

const router = express.Router();


//crud routes
router.get("/electronics", getElectronics);
router.get("/electronics/:id", getElectronic);
router.post("/electronics", createElectronic);
router.put("/electronics/:id", updateElectronic);
router.delete("/electronics/:id", deleteElectronic);

//searching

router.get("/electronics/search", searchByName );
router.get("/electronics/search/lowprices", searchByLowPrice );
router.get("/electronics/search/highprices", searchByHighPrice );
router.get("/electronics/search/newelectronics", getNewElectronics );
router.get("/electronics/search/reciepts", getElectronicsByReciepts );


//screen sizes
router.get("/electronics/search/largescreens", getElectronicsWithLargeScreen );
router.get("/electronics/search/mediumscreens", getElectronicsWithMediumScreen );
router.get("/electronics/search/smallscreens", getElectronicsWithSmallScreen );


//pagination
router.get("/electronics/search/pages", getElectronicsWithPagination );



export default router;
