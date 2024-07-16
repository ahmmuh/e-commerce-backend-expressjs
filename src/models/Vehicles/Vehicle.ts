import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  horsepower: {
    type: Number,
    required: true,
  },
  images: [{ type: String, required: true }],
  price: {
    type: Number,
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

export const Vehicle = mongoose.model("vehicles", vehicleSchema);
