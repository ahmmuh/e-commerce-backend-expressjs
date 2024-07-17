import mongoose from "mongoose";
// import { Vehicle } from "../Vehicles/Vehicle";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },

  phoneNumber: {
    type: Number,
    default: 0,
    required: true,
  },
  birthDay: {
    type: Date,
  },
profileImage: {
    type: Buffer,
    required: true,
},
  address: {
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
  },

  location: {
    latitude: Number,
    longitude: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model("user", userSchema);
