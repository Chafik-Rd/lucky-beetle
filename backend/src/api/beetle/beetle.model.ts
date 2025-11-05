import { Schema, model } from "mongoose";

const BeetleSchema = new Schema(
  {
    name: { type: String, required: true },
    scientificName: { type: String },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    origin: { type: String, required: true },
    rarity: {
      type: String,
      required: true,
      enum: ["common", "rare", "legendary"],
    },
    size: {
      type: String,
      required: true,
      enum: ["เล็ก", "กลาง", "ใหญ่"],
    },
    details: { type: String },
  },
  {
    timestamps: true,
  }
);

export const BeetleModel = model("Beetle", BeetleSchema);
