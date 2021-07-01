import { Request, Response, NextFunction } from "express";
import * as Joi from "joi";
import { validateRequest } from "../helpers/validator";

export function createSessionSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  validateRequest(req, next, schema);
}
