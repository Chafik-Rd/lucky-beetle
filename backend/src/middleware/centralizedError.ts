import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../types/types";




export const centralizedError = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
