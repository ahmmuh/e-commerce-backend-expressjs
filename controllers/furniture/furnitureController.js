import { Category } from "../../category_subcategory/model/Category.js";
import { Furniture } from "../../models/furniture/Furniture.js";
import { User } from "../../models/users/user.js";
import { Cloth } from "../../models/clothes/Cloth.js";
import { Error } from "mongoose";
import { Electronic } from "../../models/electronics/Electronic.js";

export const getFurnitures = async (req, res) => {
  try {
    const furnitures = await Furniture.find();
    res.status(200).send(furnitures);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getFurniture = async (req, res) => {
  const furniture = await Furniture.findById(req.params.id);

  if (Furniture) {
    res.status(200).send(furniture);
  }
  res.status(400).json({ success: false, message: "Furniture Not found" });
};

export const createFurniture = async (req, res) => {
  const { name, description, price, location, user, category } = req.body;

  const foundedCategory = await Category.findById(req.body.category);
  if (!foundedCategory) return res.status(404).send("Not valid category");

  const ownerUser = await User.findById(req.body.user);
  if (!ownerUser) return res.status(404).send("User not found");
  try {
    const newFurniture = new Furniture({
      name,
      description,
      images,
      price,
      location,
      user,
      category,
    });
    newFurniture = await newFurniture.save();
    console.log("The new Furniture is here ", newFurniture);
    res.status(201).send("Funiture created");
  } catch (error) {
    res.send(error);
  }
};

export const updateFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!furniture) throw Error("Furniture Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findByIdAndDelete(req.params.id);
    if (!furniture) throw Error("No Furniture found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};

// extra functions

export const getFurnituresWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const furnitures = await Furniture.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedFurnitures = furnitures.slice(offset, offset + pageSize);

    res.status(200).json(paginatedFurnitures);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginatedFurnitures" });
  }
};
export const searchFurnituresByName = async (req,res) =>{
  try {
    const {name} = req.query;
    const furnituresSearchedByNames = await Furniture.find({name});
    if (!furnituresSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(furnituresSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchFurnituresByHighPrice = async (req,res) =>{
  try{
    const furnitures = await  Furniture.find();
    const highPriceFurnitures = furnitures.filter((furniture) => furniture.price >= 200);
    console.log("Low prices: ", highPriceFurnitures)
    res.status(200).json(highPriceFurnitures)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på furnitures"})
  }
}


//search by low price
export const searchFurnituresByLowPrice = async (req,res) =>{
  try{
    const furnitures = await  Furniture.find();
    const lowPriceFurnitures = furnitures.filter((furniture) => furniture.price < 200);
    console.log("Low prices: ", lowPriceFurnitures)
    res.status(200).json(lowPriceFurnitures)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}
