"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define a general property model
const HousePropertySchema = new mongoose_1.default.Schema({
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
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    address: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Address",
        required: true,
    },
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
exports.House = mongoose_1.default.model("House", HousePropertySchema);
// export const Apartment = mongoose.model("Apartment", HousePropertySchema);
// export const Villa = mongoose.model("Villa", HousePropertySchema);
// export const Cottage = mongoose.model("Cottage", HousePropertySchema);
