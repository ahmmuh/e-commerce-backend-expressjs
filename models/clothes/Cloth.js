import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [{ type: Array, required: true }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const Cloth = mongoose.model("Cloth", ClothSchema);
