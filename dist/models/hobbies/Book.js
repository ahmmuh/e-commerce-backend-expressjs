import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
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
export const Book = mongoose.model("Book", bookSchema);
