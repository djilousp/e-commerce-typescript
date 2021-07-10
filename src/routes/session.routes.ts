import express from "express";
import {
  createSessionHandler,
  invalidateUserSessionHandler,
} from "../controllers/session.controller";
import { createSessionSchema } from "../schema/session.schema";

const router = express.Router();
router.post("/", createSessionSchema, createSessionHandler);
router.delete("/", requireUser, invalidateUserSessionHandler);
export default router;
