import mongoose, { Document, Schema } from "mongoose";

export interface IOtp extends Document {
  phone: string;
  code: string;
  createdAt: Date;
}

const otpSchema = new Schema<IOtp>({
  phone: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // expires in 5 mins
});

export default mongoose.model<IOtp>("Otp", otpSchema);
