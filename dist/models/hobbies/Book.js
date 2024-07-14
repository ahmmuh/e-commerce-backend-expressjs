"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    author: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isbn: {
        type: Number,
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
        required: true,
    },
});
exports.Book = mongoose_1.default.model("Book", bookSchema);
