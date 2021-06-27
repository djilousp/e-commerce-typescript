import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  ip: string;
  userAgent: string;
  created_at: Date;
  updated_at: Date;
}

const SessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
    ip: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model<SessionDocument>("Session", SessionSchema);

export default Session;
