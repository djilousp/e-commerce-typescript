import express from "express";
import { createProductHandler } from "../controllers/product.controller";
import { requireShop } from "../helpers/requireShop";
import { createProductSchema } from "../schema/product.schema";

const router = express.Router();
router.post("/", requireShop, createProductSchema, createProductHandler);
export default router;
