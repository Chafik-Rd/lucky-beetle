import { NextFunction, Request, Response } from "express";
import { Beetle } from "../../models/Beetle";

// Get all beetles
export const getBeetles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const beetles = await Beetle.find();
    res.status(200).json({
      success: true,
      data: beetles,
      message: "All beetles retrieved successfully!",
    });
  } catch (err) {
    next(err);
  }
};
