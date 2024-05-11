import express from "express";
import {
  createCloth,
  deleteCloth,
  getCloth,
  getClothes,
  updateCloth,
} from "../../controllers/clothes/clothController.js";

const router = express.Router();

router.get("/Clothes", getClothes);
router.get("/Clothes/:id", getCloth);
router.post("/Clothes", createCloth);
router.put("/Clothes/:id", updateCloth);
router.delete("/Clothes/:id", deleteCloth);

export default router;
