import express from "express";
import {
  createFurniture,
  deleteFurniture,
  getFurniture,
  getFurnitures,
  updateFurniture,
} from "../../controllers/furniture/furnitureController.js";

const router = express.Router();

router.get("/furnitures", getFurnitures);
router.get("/furnitures/:id", getFurniture);
router.post("/furnitures", createFurniture);
router.put("/furnitures/:id", updateFurniture);
router.delete("/furnitures/:id", deleteFurniture);

export default router;
