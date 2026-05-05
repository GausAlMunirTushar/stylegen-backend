import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./configs/database.js";
import { getAllUsers, register } from "./controllers/auth.controller.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/register", register);
app.get("/users", getAllUsers);

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
