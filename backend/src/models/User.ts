import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  phone: string;
  role: "worker" | "contractor";
  name?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  phone: { type: String, required: true, unique: true },
  role: { type: String, enum: ["worker", "contractor"], required: true },
  name: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>("User", userSchema);
