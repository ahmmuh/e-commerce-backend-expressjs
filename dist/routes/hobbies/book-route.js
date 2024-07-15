import express from "express";
import { createBook, deleteBook, getBook, getBooks, getBooksWithPagination, searchBooksByLowPrice, searchBooksByName, updateBook } from "../../controllers/hobbies/bookController.js";
import { searchBoatsByHighPrice } from "../../controllers/hobbies/boatController.js";
import { bookValidationRules } from "../../validations/book-validator.js";
import { validationAction } from "../../validations/validationAction.js";
const router = express.Router();
router.get("/books", getBooks);
router.get("/books/:id", getBook);
router.post("/books", bookValidationRules, validationAction, createBook);
router.put("/books/:id", bookValidationRules, validationAction, updateBook);
router.delete("/books/:id", deleteBook);
//searching
router.get("/books/search", searchBooksByName);
router.get("/books/search/lowprices", searchBooksByLowPrice);
router.get("/books/search/highprices", searchBoatsByHighPrice);
//pagination
router.get("/books/search/pages", getBooksWithPagination);
export default router;
