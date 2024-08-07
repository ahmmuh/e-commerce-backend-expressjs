import express from "express";
import {
  createBoat,
  deleteBoat,
  getBoat,
  getBoats,
  getBoatsWithPagination,
  searchBoatsByHighPrice,
  searchBoatsByLowPrice,
  searchBoatsByName,
  updateBoat
} from "../../controllers/web/hobbies/boatController.js";
import { boatValidationRules } from "../../validations/boat-validator.js";
import { validationAction } from "../../validations/validationAction.js";

const router = express.Router();

router.get("/boats", getBoats);
router.get("/boats/:id", getBoat);
router.post("/boats", boatValidationRules,validationAction,
  createBoat);
router.put("/boats/:id",boatValidationRules,validationAction ,updateBoat);
router.delete("/boats/:id", deleteBoat);



//searching

router.get("/boats/search", searchBoatsByName );
router.get("/boats/search/lowprices", searchBoatsByLowPrice );
router.get("/boats/search/highprices", searchBoatsByHighPrice );



//pagination
router.get("/boats/search/pages", getBoatsWithPagination );


export default router;
