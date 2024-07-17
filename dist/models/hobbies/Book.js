import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    bookName: {
        type: String,
        required: true,
    },
    isbn: {
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
    },
    color: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: Buffer,
        required: true,
    },
    pageNumber: {
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
});
export const Book = mongoose.model("Book", bookSchema);
