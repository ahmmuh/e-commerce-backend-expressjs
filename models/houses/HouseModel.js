import mongoose from "mongoose";
// Define a general property model
const HousePropertySchema = new mongoose.Schema({
  //type of the house, bostadsrätt eller hyresrätt
  houseType: {
    type: String,
    required: true,
  },
  yearBuilt: {
    type: Number,
    required: true,
  },
  squareMeters: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  wifi: {
    type: Boolean,
  },
  water: {
    type: Boolean,
  },
  toilets: {
    type: Number,
    required: true,
  },
  // address: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Address",
  //   // required: true,
  // },
  location: {
    lat: Number,
    lng: Number,
  },
  parking: {
    type: Boolean,
  },
  busConnection: {
    type: Boolean,
  },
});

// Define specific models for different types of properties
export const House = mongoose.model("House", HousePropertySchema);
export const Apartment = mongoose.model("Apartment", HousePropertySchema);
export const Villa = mongoose.model("Villa", HousePropertySchema);
export const Cottage = mongoose.model("Cottage", HousePropertySchema);
