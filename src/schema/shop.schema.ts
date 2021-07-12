import { Request, Response, NextFunction } from "express";
import * as Joi from "joi";
import { validateRequest } from "../helpers/validator";

export function createShopSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = Joi.object({
    name: Joi.string().email().required(),
    bannerUrl: Joi.string(),
  });
  validateRequest(req, next, schema);
}
