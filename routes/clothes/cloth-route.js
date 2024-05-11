import express from "express";
import {
  createCloth,
  deleteCloth,
  getCloth,
  getClothes,
  updateCloth,
} from "../../controllers/clothes/clothController.js";

const router = express.Router();

router.get("/electronics", getClothes);
router.get("/electronics/:id", getCloth);
router.post("/electronics", createCloth);
router.put("/electronics/:id", updateCloth);
router.delete("/electronics/:id", deleteCloth);

export default router;
