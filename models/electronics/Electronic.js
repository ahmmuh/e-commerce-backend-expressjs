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

  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Category",
  //   required: true,
  // },

  //images: [{ type: Array, required: true }],
  batteryHealth: {
    type: String,
    label: String,
    required: Boolean,
  },
  screenSize: {
    type: String,
    label: String,
    required: Boolean,
  },
  colors: {
    type: String,
    label: String,
    required: Boolean,
  },
  condition: {
    type: String,
    label: String,
    required: Boolean,
  },
  receipt: {
    type: String,
    label: String,
    required: Boolean,
  },
  ownershipDuration: {
    type: String,
    label: String,
    required: Boolean,
  },

  location: {
    lat: Number,
    lng: Number,
  },

  thumbnailImage: {
    type: Buffer,
    required: true,
  },
});

export const Electronic = mongoose.model("ELectronic", ElectronicSchema);
