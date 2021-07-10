import { NextFunction, Request, Response } from "express";

export async function requireUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //@ts-ignore
  const user = req.user;
  if (!user) {
    return res.sendStatus(403);
  }

  return next();
}
