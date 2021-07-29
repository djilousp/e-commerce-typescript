import { FilterQuery } from "mongoose";
import Product, { ProductDocument } from "../models/product.model";
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

export async function findProducts(
  query: FilterQuery<ProductDocument>,
  limit: number = 200
) {
  return Product.find(query).lean().sort({ createdAt: -1 }).limit(limit);
}
