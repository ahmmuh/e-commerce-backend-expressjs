import mongoose from "mongoose";
import { type } from "os";

const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: Text,
    required: true,
  },
  images: [{ type: Array, required: true }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

export const Furniture = mongoose.model("Furniture", FurnitureSchema);
