import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface ShopDocument extends mongoose.Document {
  user: UserDocument["_id"];
  name: string;
  bannerUrl: string;
  created_at: Date;
  updated_at: Date;
}

const ShopSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },
    name: { type: String },
    bannerUrl: { type: String },
  },
  { timestamps: true }
);

const Shop = mongoose.model<ShopDocument>("Shop", ShopSchema);

export default Shop;
