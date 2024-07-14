"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ClothSchema = new mongoose_1.default.Schema({
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
    thumbnail: {
        type: Buffer,
        required: true,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
});
exports.Cloth = mongoose_1.default.model("Cloth", ClothSchema);
