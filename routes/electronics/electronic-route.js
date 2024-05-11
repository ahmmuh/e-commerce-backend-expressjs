import express from "express";
import {
  createElectronic,
  deleteElectronic,
  getElectronic,
  getElectronics,
  updateElectronic,
} from "../../controllers/electronics/electronicController.js";

const router = express.Router();

router.get("/electronics", getElectronics);
router.get("/electronics/:id", getElectronic);
router.post("/electronics", createElectronic);
router.put("/electronics/:id", updateElectronic);
router.delete("/electronics/:id", deleteElectronic);

export default router;
