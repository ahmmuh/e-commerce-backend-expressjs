"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import { Vehicle } from "../Vehicles/Vehicle";
const Schema = mongoose_1.default.Schema;
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
exports.User = mongoose_1.default.model("user", userSchema);
