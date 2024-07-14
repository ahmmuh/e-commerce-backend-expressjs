"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_js_1 = require("../../controllers/hobbies/bookController.js");
const boatController_js_1 = require("../../controllers/hobbies/boatController.js");
const book_validator_js_1 = require("../../validations/book-validator.js");
const validationAction_js_1 = require("../../validations/validationAction.js");
const router = express_1.default.Router();
router.get("/books", bookController_js_1.getBooks);
router.get("/books/:id", bookController_js_1.getBook);
router.post("/books", book_validator_js_1.bookValidationRules, validationAction_js_1.validationAction, bookController_js_1.createBook);
router.put("/books/:id", book_validator_js_1.bookValidationRules, validationAction_js_1.validationAction, bookController_js_1.updateBook);
router.delete("/books/:id", bookController_js_1.deleteBook);
//searching
router.get("/books/search", bookController_js_1.searchBooksByName);
router.get("/books/search/lowprices", bookController_js_1.searchBooksByLowPrice);
router.get("/books/search/highprices", boatController_js_1.searchBoatsByHighPrice);
//pagination
router.get("/books/search/pages", bookController_js_1.getBooksWithPagination);
exports.default = router;
