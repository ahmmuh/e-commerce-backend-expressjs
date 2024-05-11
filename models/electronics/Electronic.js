import mongoose from "mongoose";
import { type } from "os";

const ElectronicSchema = new mongoose.Schema({
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

export const Electronic = mongoose.model("ELectronic", ElectronicSchema);
