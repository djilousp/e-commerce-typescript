import Product from "../models/product.model";

export async function createProduct(
  shopId: string,
  name: string,
  description: string,
  price: number,
  countInStock: number
) {
  const product = await Product.create({
    shop: shopId,
    name,
    description,
    price,
    countInStock,
  });
  return JSON.parse(JSON.stringify(product));
}
