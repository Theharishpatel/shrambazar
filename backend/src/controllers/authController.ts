import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Otp from "../models/Otp";
import User from "../models/User";

// authController.ts

const otpStore = new Map<string, string>(); // MVP only

export const requestOtp = async (req: Request, res: Response) => {
  const { phone, role } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
  otpStore.set(phone, otp); // store in memory (MVP)

  console.log(`OTP for ${phone}: ${otp}`); // you can see OTP in console

  return res.status(200).json({
    message: "OTP generated",
    otp, // return OTP directly to frontend for MVP
  });
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { phone, otp } = req.body;
  const storedOtp = otpStore.get(phone);

  // MVP: directly compare with stored OTP (no expiry)
  if (storedOtp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  otpStore.delete(phone); // remove after verification

  return res.status(200).json({
    message: "OTP verified successfully",
  });
};

