import mongoose from "mongoose";
// Define a general property model
const HousePropertySchema = new mongoose.Schema({
    houseType: {
        type: String,
        required: true,
    },
    yearBuilt: {
        type: Number,
        required: true,
    },
    squareMeters: {
        type: Number,
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
        required: true,
    },
    water: {
        type: Boolean,
        required: true,
    },
    toilets: {
        type: Number,
        required: true,
    },
    images: [{ type: String, required: true }],
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
    parking: {
        type: Boolean,
    },
    busConnection: {
        type: Boolean,
    },
});
export const House = mongoose.model("House", HousePropertySchema);
