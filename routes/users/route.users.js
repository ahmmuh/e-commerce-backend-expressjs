import express from "express";
import {
  countUsers,
  createUser,
  deleteUser,
  getUser,
  getUsers, getUsersWithPagination, searchUsersByName,
  updateUser
} from "../../controllers/users/user-controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.delete("/users", countUsers);


//searching

router.get("/users/search", searchUsersByName );


//pagination
router.get("/users/search/pages", getUsersWithPagination );


export default router;
