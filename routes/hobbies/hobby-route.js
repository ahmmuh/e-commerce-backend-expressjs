import express from "express";
import {
  createHobby,
  deleteHobby,
  getHobbies,
  getHobby,
  updateHobby,
} from "../../controllers/hobbies/hobbyController.js";

const router = express.Router();

router.get("/hobbies", getHobbies);
router.get("/hobbies/:id", getHobby);
router.post("/hobbies", createHobby);
router.put("/hobbies/:id", updateHobby);
router.delete("/hobbies/:id", deleteHobby);

export default router;
