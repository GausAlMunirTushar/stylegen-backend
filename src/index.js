import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./configs/database.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import categoryRouter from "./routes/category.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRouter );

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
