import { Request, Response } from "express";
import { createShop } from "../services/shop.service";
import { findUser } from "../services/user.service";

export async function createShopHandler(req: Request, res: Response) {
  try {
    //@ts-ignore
    const user = await findUser({ _id: req.user._id });
    if (!user) return res.status(403);
    if (user.type === "ShopOwner")
      return res
        .status(400)
        .send({ message: "You need to sign up as a ShopOwner" });
    //@ts-ignore
    const shop = await createShop(req.user, req.body.name, req.body.bannerUrl);
    return res.status(200).send(shop);
  } catch (error) {
    //log.error(error);
    return res.status(401).send(error.message);
  }
}
