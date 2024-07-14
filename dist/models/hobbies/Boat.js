"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boat = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BoatSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    price: {
        type: Number,
        require: true,
    },
});
exports.Boat = mongoose_1.default.model("Boat", BoatSchema);
