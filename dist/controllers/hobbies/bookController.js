"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooksByLowPrice = exports.searchBooksByHighPrice = exports.searchBooksByName = exports.getBooksWithPagination = exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Book_js_1 = require("../../models/hobbies/Book.js");
const user_js_1 = require("../../models/users/user.js");
const fs_1 = __importDefault(require("fs"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book_js_1.Book.find();
        res.status(200).send(books);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield Book_js_1.Book.findById(req.params.id);
    if (book) {
        res.status(200).send(Book_js_1.Book);
    }
    res.status(400).json({ success: false, message: "Book Not found" });
});
exports.getBook = getBook;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author, name, isbn, description, image, price, model } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newBook = new Book_js_1.Book({
            name,
            model,
            description,
            price,
            image: {
                data: fs_1.default.readFileSync(thumbnailImage),
                contentType: "image/png",
            },
        });
        yield newBook.save();
        console.log("The new Book is here ", newBook);
        res.status(201).json({ message: "One Book has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Book = yield Book.findByIdAndUpdate(req.params.id, req.body);
        if (!Book)
            throw Error("Book Not found");
        res.status(200).send("Book updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Book = yield Book.findByIdAndDelete(req.params.id);
        if (!Book)
            throw Error("No Book found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteBook = deleteBook;
// extra functions
const getBooksWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const books = yield Book_js_1.Book.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedBooks = books.slice(offset, offset + pageSize);
        res.status(200).json(paginatedBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated books" });
    }
});
exports.getBooksWithPagination = getBooksWithPagination;
const searchBooksByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const booksSearchedByNames = yield Book_js_1.Book.find({ name });
        if (!booksSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(booksSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchBooksByName = searchBooksByName;
//high price
const searchBooksByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book_js_1.Book.find();
        const highPriceBooks = books.filter((book) => book.price >= 200);
        console.log("Low prices: ", highPriceBooks);
        res.status(200).json(highPriceBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på books" });
    }
});
exports.searchBooksByHighPrice = searchBooksByHighPrice;
//search by low price
const searchBooksByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book_js_1.Book.find();
        const lowPriceBooks = books.filter((book) => book.price < 200);
        console.log("Low prices: ", lowPriceBooks);
        res.status(200).json(lowPriceBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchBooksByLowPrice = searchBooksByLowPrice;
