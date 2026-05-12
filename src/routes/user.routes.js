import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getUserById);
userRoutes.delete("/:id", deleteUserById);
userRoutes.put("/:id", updateUserById);

export default userRoutes;
