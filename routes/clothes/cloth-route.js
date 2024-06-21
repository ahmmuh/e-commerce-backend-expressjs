import express from "express";
import {
  createCloth,
  deleteCloth,
  getCloth,
  getClothes,
  updateCloth,
} from "../../controllers/clothes/clothController.js";

const router = express.Router();

router.get("/clothes", getClothes);
router.get("/clothes/:id", getCloth);
router.post("/clothes", createCloth);
router.put("/clothes/:id", updateCloth);
router.delete("/clothes/:id", deleteCloth);

export default router;
