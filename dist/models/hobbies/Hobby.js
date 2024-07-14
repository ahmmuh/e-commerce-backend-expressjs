"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hobby = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const HobbySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{ type: String, required: true }],
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: {
        lat: Number,
        lng: Number,
    },
});
exports.Hobby = mongoose_1.default.model("Hobby", HobbySchema);
