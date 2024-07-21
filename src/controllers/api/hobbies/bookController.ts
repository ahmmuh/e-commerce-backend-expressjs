import { Category } from "../../category_subcategory/model/Category.js";
import { Book } from "../../models/hobbies/Book.js";
import { User } from "../../models/users/user.js";
import fs from "fs";
import { Request, Response } from "express";
export const getBooks = async (req:Request, res:Response) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getBook = async (req:Request, res:Response) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.status(200).send(Book);
  }
  res.status(400).json({ success: false, message: "Book Not found" });
};

export const createBook = async (req:Request, res:Response) => {
  try {
  const {
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
  } = req.body;
  const foundedCategory = await Category.findById(req.body.category);


   const ownerUser = await User.findById(req.body.user);
  if (!foundedCategory || ownerUser) return res.status(400).json({error: "Invalid category or user"})

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
    await newBook.save();
    console.log("The new Book is here ", newBook);
    res.status(201).json({ message: "One Book has been created" });
  } catch (error) {
    console.error("Error creating category")
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateBook = async (req:Request, res:Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!book) throw Error("Book Not found");
    res.status(200).send("Book updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteBook = async (req:Request, res:Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) throw Error("No Book found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};


// extra functions

export const getBooksWithPagination = async (req:Request, res:Response) => {
  try {
    const currentPage = parseInt(req.query.page as string) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const books = await Book.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedBooks = books.slice(offset, offset + pageSize);

    res.status(200).json(paginatedBooks);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated books" });
  }
};
export const searchBooksByName = async (req:Request, res:Response) =>{
  try {
    const {name} = req.query;
    const booksSearchedByNames = await Book.find({name});
    if (!booksSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(booksSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchBooksByHighPrice = async (req:Request, res:Response) =>{
  try{
    const books = await  Book.find();
    const highPriceBooks = books.filter((book) => book.price as number >= 200);
    console.log("Low prices: ", highPriceBooks)
    res.status(200).json(highPriceBooks)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på books"})
  }
}


//search by low price
export const searchBooksByLowPrice = async (req:Request, res:Response) =>{
  try{
    const books = await  Book.find();
    const lowPriceBooks = books.filter((book) => book.price as number <= 200);
    console.log("Low prices: ", lowPriceBooks)
    res.status(200).json(lowPriceBooks)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}