import mongoose from "mongoose";

const HobbySchema = new mongoose.Schema({
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

export const Hobby = mongoose.model("Hobby", HobbySchema);
