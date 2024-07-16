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
  color:{
    type: String,
    required: true,
  },
  size: {
    type:Number || String,
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
   user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
  required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },

  location: {
    latitude: Number,
    longitude: Number,
  },
});

export const Cloth = mongoose.model("Cloth", ClothSchema);
