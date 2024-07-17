var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Category } from "../../category_subcategory/model/Category.js";
import { Book } from "../../models/hobbies/Book.js";
import { User } from "../../models/users/user.js";
export const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        res.status(200).send(books);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield Book.findById(req.params.id);
    if (book) {
        res.status(200).send(Book);
    }
    res.status(400).json({ success: false, message: "Book Not found" });
});
export const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { author, bookName, isbn, description, price, color, thumbnail, pageNumber, images, user, category, address, location, } = req.body;
        const foundedCategory = yield Category.findById(req.body.category);
        const ownerUser = yield User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newBook = new Book({
            author,
            bookName,
            isbn,
            description,
            price,
            color,
            thumbnail,
            pageNumber,
            images,
            user,
            category,
            address,
            location,
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
export const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Book.findByIdAndUpdate(req.params.id, req.body);
        if (!book)
            throw Error("Book Not found");
        res.status(200).send("Book updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Book.findByIdAndDelete(req.params.id);
        if (!book)
            throw Error("No Book found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
// extra functions
export const getBooksWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const books = yield Book.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedBooks = books.slice(offset, offset + pageSize);
        res.status(200).json(paginatedBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated books" });
    }
});
export const searchBooksByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const booksSearchedByNames = yield Book.find({ name });
        if (!booksSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(booksSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchBooksByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        const highPriceBooks = books.filter((book) => book.price >= 200);
        console.log("Low prices: ", highPriceBooks);
        res.status(200).json(highPriceBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på books" });
    }
});
//search by low price
export const searchBooksByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        const lowPriceBooks = books.filter((book) => book.price <= 200);
        console.log("Low prices: ", lowPriceBooks);
        res.status(200).json(lowPriceBooks);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
