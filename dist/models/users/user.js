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
    // hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hobby" }],
    // clothes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cloth" }],
    // electronics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Electronic" }],
    // Furnitures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Furniture" }],
    // houses: [{ type: mongoose.Schema.Types.ObjectId, ref: "House" }],
    // vehicles: [Vehicle],
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        // required: true
    },
    phoneNumber: {
        type: Number,
        default: 0,
        required: true,
    },
    birthDay: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
export const User = mongoose.model("user", userSchema);
