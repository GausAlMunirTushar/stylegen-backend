import express from "express";
import { getAllProducts } from "../controllers/products.controller.js";

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
// productRoutes.post("/", createProduct);

export default productRoutes;
