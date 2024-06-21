import express from "express";
import {
  createBoat,
  deleteBoat,
  getBoat,
  getBoats,
  updateBoat,
} from "../../controllers/hobbies/boatController.js";

const router = express.Router();

router.get("/boats", getBoats);
router.get("/boats/:id", getBoat);
router.post("/boats", createBoat);
router.put("/boats/:id", updateBoat);
router.delete("/boats/:id", deleteBoat);

export default router;
