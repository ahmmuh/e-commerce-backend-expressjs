import express from "express";
import {
  countUserproducts,
  createUserProduct,
  getUserProducts,
} from "../../controllers/users/user-productController.js";

const router = express.Router();

router.get("/userProducts", getUserProducts);
router.post("/userProducts", createUserProduct);
router.delete("/userProducts", countUserproducts);

export default router;
