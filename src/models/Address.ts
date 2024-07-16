import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  streetName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: false,
  },
  buildingNumber: {
    type: Number,
  },
});

export const Address = mongoose.model("addresses", AddressSchema);
