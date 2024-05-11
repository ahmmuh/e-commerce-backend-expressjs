import express from "express";
import {
  countUsers,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../../controllers/users/user-controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.delete("/users", countUsers);

export default router;
