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
} from "../../controllers/hobbies/boatController.js";
import {
  getFurnituresWithPagination,
  searchFurnituresByHighPrice,
  searchFurnituresByName
} from "../../controllers/furniture/furnitureController.js";

const router = express.Router();

router.get("/boats", getBoats);
router.get("/boats/:id", getBoat);
router.post("/boats", createBoat);
router.put("/boats/:id", updateBoat);
router.delete("/boats/:id", deleteBoat);



//searching

router.get("/boats/search", searchBoatsByName );
router.get("/boats/search/lowprices", searchBoatsByLowPrice );
router.get("/boats/search/highprices", searchBoatsByHighPrice );



//pagination
router.get("/boats/search/pages", getBoatsWithPagination );


export default router;
