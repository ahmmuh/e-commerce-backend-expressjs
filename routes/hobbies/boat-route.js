import express from "express";
import {
  createBoat,
  deleteBoat,
  getBoat,
  getBoats,
  updateBoat,
} from "../../controllers/hobbies/boatController.js";

const router = express.Router();

router.get("/Boats", getBoats);
router.get("/Boats/:id", getBoat);
router.post("/Boats", createBoat);
router.put("/Boats/:id", updateBoat);
router.delete("/Boats/:id", deleteBoat);

export default router;
