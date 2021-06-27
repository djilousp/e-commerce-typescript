import { Request, Response, NextFunction } from "express";
import * as Joi from "joi";
import { validateRequest } from "../helpers/validator";

export function createSessionSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    type: Joi.string().valid("ShopOwner", "User").required(),
  });
  validateRequest(req, next, schema);
}
