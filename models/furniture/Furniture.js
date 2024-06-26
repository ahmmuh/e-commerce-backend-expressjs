import mongoose from "mongoose";

const FurnitureSchema = new mongoose.Schema({
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
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },

  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
});

export const Furniture = mongoose.model("Furniture", FurnitureSchema);
