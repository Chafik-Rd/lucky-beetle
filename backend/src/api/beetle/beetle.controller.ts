import { NextFunction, Request, Response } from "express";
import { BeetleModel } from "./beetle.model";
import { Beetle, HttpError } from "../../types/types";

// Create a new beetle
export const createBeetle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    scientificName,
    description,
    imageUrl,
    price,
    stock,
    origin,
    rarity,
    size,
    details,
  }: Beetle = req.body;

  if (
    !name ||
    !description ||
    !imageUrl ||
    !price ||
    !stock ||
    !origin ||
    !rarity ||
    !size ||
    !details
  ) {
    const error: HttpError = new Error(`
    Name, description imageUrl, price, stock, origin, rarity, size and details are required!`);
    error.status = 400;
    return next(error);
  }

  try {
    const beetle = await BeetleModel.findOne({ name });

    if (beetle) {
      const error: HttpError = new Error("Beetle name already");
      error.status = 409;
      return next(error);
    }

    const newBeetle = await BeetleModel.create({
      name,
      scientificName,
      description,
      imageUrl,
      price,
      stock,
      origin,
      rarity,
      size,
      details,
    });
    res.status(201).json({
      success: true,
      data: newBeetle,
      message: "Menu created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

// Get all beetles
export const getBeetles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const beetles = await BeetleModel.find();
    res.status(200).json({
      success: true,
      data: beetles,
      message: "All beetles retrieved successfully!",
    });
  } catch (err) {
    next(err);
  }
};

// Update beetle by id
export const updateBeetle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { beetleId } = req.params;
  const {
    name,
    scientificName,
    description,
    imageUrl,
    price,
    stock,
    origin,
    rarity,
    size,
    details,
  } = req.body;

  try {
    const beetle = await BeetleModel.findOne({ _id: beetleId });

    if (!beetle) {
      const error: HttpError = new Error("Beetle not found!");
      error.status = 404;
      return next(error);
    }

    if (name !== undefined) beetle.name = name;
    if (scientificName !== undefined) beetle.scientificName = scientificName;
    if (description !== undefined) beetle.description = description;
    if (imageUrl !== undefined) beetle.imageUrl = imageUrl;
    if (price !== undefined) beetle.price = price;
    if (stock !== undefined) beetle.stock = stock;
    if (origin !== undefined) beetle.origin = origin;
    if (rarity !== undefined) beetle.rarity = rarity;
    if (size !== undefined) beetle.size = size;
    if (details !== undefined) beetle.details = details;

    await beetle.save();

    res.status(200).json({
      success: true,
      data: beetle,
      message: "Beetle updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};
