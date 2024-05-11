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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
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
  price: {
    type: Number,
    required: true,
  },
});

export const Vehicle = mongoose.model("vehicles", vehicleSchema);
