import { exception } from "console";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { createProduct, findProducts } from "../services/product.service";
import { findUser } from "../services/user.service";

export async function createProductHandler(req: Request, res: Response) {
  try {
    //@ts-ignore
    const user = await findUser({ _id: req.user._id });
    if (!user) return res.status(403);
    if (user.type === "ShopOwner")
      return res
        .status(400)
        .send({ message: "Sign in as a ShopOwner please " });

    const product = await createProduct(
      //@ts-ignore
      req.shop,
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.countInStock
    );
    return res.status(200).send(product);
  } catch (error) {
    //log.error(error);
    return res.status(401).send(error.message);
  }
}

export async function getProductsHandler(req: Request, res: Response) {
  //@ts-ignore
  const products = await findProducts({ shop: req.shop });
  return res.status(200).send(products);
}

export async function getProductHandler(req: Request, res: Response) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return { error: "Invalid value" };
  }
  //@ts-ignore
  const products = await findProducts({ _id: req.params.id, shop: req.shop });
  if (products.length === 0) {
    return res.status(404);
  }
  return res.status(200).send(products[0]);
}
