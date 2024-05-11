import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  buildingNumber: {
    type: Number,
  },
  streetName: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  postalCode: {
    type: String,
  },
});

export const Address = mongoose.model("addresses", AddressSchema);
