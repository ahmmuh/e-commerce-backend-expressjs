"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furniture = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FurnitureSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{ type: Array, required: true }],
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    location: {
        address: String,
        coordinates: {
            lat: Number,
            lng: Number,
        },
    },
});
exports.Furniture = mongoose_1.default.model("Furniture", FurnitureSchema);
