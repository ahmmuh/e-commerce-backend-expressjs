import mongoose from "mongoose";
import { type } from "os";

const ElectronicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  images: [{ type: Array, required: true }],
  batteryHealth: {
    type: [
      {
        value: String,
        label: String,
        required: Boolean,
      },
    ],
  },
  screenSize: {
    type: [
      {
        value: String,
        label: String,
        required: Boolean,
      },
    ],
  },
  colors: {
    type: [
      {
        value: String,
        label: String,
        required: Boolean,
      },
    ],
  },
  condition: {
    type: [
      {
        value: String,
        label: String,
        required: Boolean,
      },
    ],
  },
  receipt: {
    type: [
      {
        value: String,
        label: String,
        required: Boolean,
      },
    ],
  },
  ownershipDuration: {
    type: [{ value: String, label: String }],
  },

  location: {
    lat: Number,
    lng: Number,
  },
});

export const Electronic = mongoose.model("ELectronic", ElectronicSchema);
