import mongoose from "mongoose";

const HobbySchema = new mongoose.Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  location: {
    lat: Number,
    lng: Number,
  },
});

export const Hobby = mongoose.model("Hobby", HobbySchema);
