import express from "express";
import {
  createSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from "../controllers/session.controller";
import { createSessionSchema } from "../schema/session.schema";
import { requireUser } from "../helpers/requireUser";

const router = express.Router();
router.post("/", createSessionSchema, createSessionHandler);
router.get("/", requireUser, getUserSessionsHandler);
router.delete("/", requireUser, invalidateUserSessionHandler);
export default router;
