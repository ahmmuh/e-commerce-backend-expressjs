import mongoose from "mongoose";

const BoatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  price: {
    type: Number,
    require: true,
  },
});

export const Boat = mongoose.model("Boat", BoatSchema);
