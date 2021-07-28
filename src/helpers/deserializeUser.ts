import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { decode } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";
import { findShop } from "../services/shop.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = (req.headers.authorization || "")
    .replace("Bearer", "")
    .trim();

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) return next();
  const { decoded, expired } = decode(accessToken);
  if (decoded) {
    //@ts-ignore
    req.user = decoded;
  }
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    if (newAccessToken) {
      // Add new access token to response header
      res.setHeader("x-access-token", newAccessToken);
      const { decoded } = decode(newAccessToken);
      //@ts-ignore
      req.user = decoded;
    }
  }
  //@ts-ignore
  const shop = await findShop({ user: req.user?._id });
  if (shop) {
    //@ts-ignore
    req.shop = shop;
    return next();
  }
  return next();
};
export default deserializeUser;
