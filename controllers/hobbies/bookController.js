import { Category } from "../../category_subcategory/model/Category.js";
import { Book } from "../../models/hobbies/Book.js";
import { User } from "../../models/users/user.js";
import fs from "fs";
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.status(200).send(Book);
  }
  res.status(400).json({ success: false, message: "Book Not found" });
};

export const createBook = async (req, res) => {
  const { author, name, isbn, description, image, price } = req.body;
  // const foundedCategory = await Category.findById(req.body.category);
  // if (!foundedCategory) return res.status(404).send("Not valid category");

  // const ownerUser = await User.findById(req.body.user);
  // if (!ownerUser) return res.status(404).send("User not found");
  try {
    const newBoat = new Boat({
      name,
      model,
      description,
      image,
      price,
      image: {
        data: fs.readFileSync(thumbnailImage),
        contentType: "image/png",
      },
    });
    newBook = await newBook.save();
    console.log("The new Book is here ", newBook);
    res.status(201).json({ message: "One Book has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateBook = async (req, res) => {
  try {
    const Book = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!Book) throw Error("Book Not found");
    res.status(200).send("Book updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const Book = await Book.findByIdAndDelete(req.params.id);
    if (!Book) throw Error("No Book found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};
