import mongoose from "mongoose";
import { ShopDocument } from "./shop.model";

export interface ProductDocument extends mongoose.Document {
  shop: ShopDocument["_id"];
  name: string;
  description: string;
  price: number;
  countInStock: number;
  created_at: Date;
  updated_at: Date;
}

const ProductSchema = new mongoose.Schema(
  {
    shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    countInStock: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
