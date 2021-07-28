import { NextFunction, Request, Response } from "express";

export async function requireShop(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //@ts-ignore
  const shop = req.shop;
  if (!shop) {
    return res.sendStatus(403);
  }
  return next();
}
