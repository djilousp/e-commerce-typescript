import express from "express";
import { createSessionHandler } from "../controllers/session.controller";
import { createSessionSchema } from "../schema/session.schema";

const router = express.Router();
router.post("/", createSessionSchema, createSessionHandler);
export default router;
