import Shop from "../models/shop.model";

export async function createShop(
  userId: string,
  name: string,
  bannerUrl: string
) {
  const shop = await Shop.create({ user: userId, name, bannerUrl });
  return JSON.parse(JSON.stringify(shop));
}
