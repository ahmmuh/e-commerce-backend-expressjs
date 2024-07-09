import express from "express";
import {
  createFurniture,
  deleteFurniture,
  getFurniture,
  getFurnitures,
  getFurnituresWithPagination,
  searchFurnituresByHighPrice,
  searchFurnituresByName,
  updateFurniture
} from "../../controllers/furniture/furnitureController.js";

const router = express.Router();

router.get("/furnitures", getFurnitures);
router.get("/furnitures/:id", getFurniture);
router.post("/furnitures", createFurniture);
router.put("/furnitures/:id", updateFurniture);
router.delete("/furnitures/:id", deleteFurniture);


//searching

router.get("/furnitures/search", searchFurnituresByName );
router.get("/furnitures/search/lowprices", searchFurnituresByHighPrice );
router.get("/furnitures/search/highprices", searchFurnituresByHighPrice );



//pagination
router.get("/furnitures/search/pages", getFurnituresWithPagination );



export default router;
