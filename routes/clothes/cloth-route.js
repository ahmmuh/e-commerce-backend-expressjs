import express from "express";
import {
  createCloth,
  deleteCloth,
  getCloth,
  getClothes,
  updateCloth,
} from "../../controllers/clothes/clothController.js";
import { upload } from "../../filemanagement/image.js";
import multer from "multer";

const router = express.Router();

const uploadFile = multer({ dest: "uploads/" });

router.get("/clothes", getClothes);
router.get("/clothes/:id", getCloth);
router.post("/clothes", uploadFile.single("thumbnail"), createCloth);
router.put("/clothes/:id", updateCloth);
router.delete("/clothes/:id", deleteCloth);

export default router;
