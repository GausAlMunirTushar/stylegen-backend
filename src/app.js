import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./configs/database.js";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import categoryRouter from "./routes/category.routes.js";
import productRoutes from "./routes/products.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRouter);
app.use("/products", productRoutes);

connectDatabase();

export default app;
