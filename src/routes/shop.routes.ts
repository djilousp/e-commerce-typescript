import express from "express";
import { createShopHandler } from "../controllers/shop.controller";
import { requireUser } from "../helpers/requireUser";
import { createShopSchema } from "../schema/shop.schema";

const router = express.Router();
router.post("/", requireUser, createShopSchema, createShopHandler);
export default router;
