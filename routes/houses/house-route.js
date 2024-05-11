import express from "express";
import {
  createHouse,
  deleteHouse,
  getHouse,
  getHouses,
  updateHouse,
} from "../../controllers/houses/houseController.js";

const router = express.Router();

router.get("/houses", getHouses);
router.get("/houses/:id", getHouse);
router.post("/houses", createHouse);
router.put("/houses/:id", updateHouse);
router.delete("/houses/:id", deleteHouse);

export default router;
