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
  images: [{ type: String, required: true }],
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  thumbnail: {
    type: Buffer,
    required: true,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

export const Cloth = mongoose.model("Cloth", ClothSchema);
