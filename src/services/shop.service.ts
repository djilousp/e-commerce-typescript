import Shop from "../models/shop.model";
import { FilterQuery } from "mongoose";
import { ShopDocument } from "../models/shop.model";
export async function createShop(
  userId: string,
  name: string,
  bannerUrl: string
) {
  const shop = await Shop.create({ user: userId, name, bannerUrl });
  return JSON.parse(JSON.stringify(shop));
}
export async function findShop(query: FilterQuery<ShopDocument>) {
  return Shop.findOne(query).lean();
}
