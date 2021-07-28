import { Request, Response, NextFunction } from "express";
import * as Joi from "joi";
import { validateRequest } from "../helpers/validator";

export function createProductSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    countInStock: Joi.number().min(1).required(),
  });
  validateRequest(req, next, schema);
}
