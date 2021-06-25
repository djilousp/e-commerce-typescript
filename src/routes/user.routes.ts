import express from "express";
import { createUserHandler } from "../controllers/user.controller";
import { createUserSchema } from "../schema/user.schema";

const router = express.Router();
router.post("/", createUserSchema, createUserHandler);
export default router;
