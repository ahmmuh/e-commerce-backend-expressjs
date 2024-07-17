import mongoose from "mongoose";
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
    images: [{ type: String, required: true }],
    batteryHealth: {
        type: Number,
        required: true,
    },
    screenSize: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    receipt: {
        type: String,
        required: true,
    },
    ownershipDuration: {
        type: Number,
        required: true,
    },
    thumbnailImage: {
        type: Buffer,
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
export const Electronic = mongoose.model("ELectronic", ElectronicSchema);
