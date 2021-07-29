import express from "express";
import {
  createProductHandler,
  getProductsHandler,
  getProductHandler,
} from "../controllers/product.controller";
import { requireShop } from "../helpers/requireShop";
import { createProductSchema } from "../schema/product.schema";

const router = express.Router();
router.post("/", requireShop, createProductSchema, createProductHandler);
router.get("/", requireShop, getProductsHandler);
router.get("/:id", requireShop, getProductHandler);
export default router;
