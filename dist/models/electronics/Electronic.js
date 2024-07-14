"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electronic = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ElectronicSchema = new mongoose_1.default.Schema({
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
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    //images: [{ type: Array, required: true }],
    batteryHealth: {
        type: String,
        label: String,
        required: Boolean,
    },
    screenSize: {
        type: String,
        label: String,
        required: Boolean,
    },
    colors: {
        type: String,
        label: String,
        required: Boolean,
    },
    condition: {
        type: String,
        label: String,
        required: Boolean,
    },
    receipt: {
        type: String,
        label: String,
        required: Boolean,
    },
    ownershipDuration: {
        type: String,
        label: String,
        required: Boolean,
    },
    location: {
        lat: Number,
        lng: Number,
    },
    thumbnailImage: {
        type: Buffer,
        required: true,
    },
});
exports.Electronic = mongoose_1.default.model("ELectronic", ElectronicSchema);
