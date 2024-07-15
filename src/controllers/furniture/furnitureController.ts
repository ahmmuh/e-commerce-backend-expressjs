import { Category } from "../../category_subcategory/model/Category.js";
import { Furniture } from "../../models/furniture/Furniture.js";
import { User } from "../../models/users/user.js";
import { Cloth } from "../../models/clothes/Cloth.js";

import { Error } from "mongoose";
import { Electronic } from "../../models/electronics/Electronic.js";
import { Request, Response } from "express";

export const getFurnitures = async (req:Request, res:Response) => {
  try {
    const furnitures = await Furniture.find();
    res.status(200).send(furnitures);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getFurniture = async (req:Request, res:Response) => {
  const furniture = await Furniture.findById(req.params.id);

  if (Furniture) {
    res.status(200).send(furniture);
  }
  res.status(400).json({ success: false, message: "Furniture Not found" });
};

export const createFurniture = async (req:Request, res:Response) => {
  try {
  const { name, description, price, images, location, user, category } = req.body;

  const foundedCategory = await Category.findById(req.body.category);
  const ownerUser = await User.findById(req.body.user);

  if (!foundedCategory || ownerUser) return res.status(400).json({error: "Invalid category or user"})

    const newFurniture = new Furniture({
      name,
      description,
      images,
      price,
      location,
      user,
      category,
    });
     await newFurniture.save();
    console.log("The new Furniture is here ", newFurniture);
    res.status(201).send("Funiture created");
  } catch (error) {
    console.error("Error creating category")
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateFurniture = async (req:Request, res:Response) => {
  try {
    const furniture = await Furniture.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!furniture) throw new Error("Furniture Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteFurniture = async (req:Request, res:Response) => {
  try {
    const furniture = await Furniture.findByIdAndDelete(req.params.id);
    if (!furniture) throw new Error("No Furniture found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};

// extra functions

export const getFurnituresWithPagination = async (req:Request, res:Response) => {
  try {
    const currentPage = parseInt(req.query.page as string) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const furnitures = await Furniture.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedFurnitures = furnitures.slice(offset, offset + pageSize);

    res.status(200).json(paginatedFurnitures);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginatedFurnitures" });
  }
};
export const searchFurnituresByName = async (req:Request, res:Response) =>{
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
export const searchFurnituresByHighPrice = async (req:Request, res:Response) =>{
  try{
    const furnitures = await  Furniture.find();
    const highPriceFurnitures = furnitures.filter((furniture) => furniture.price as number >= 200);
    console.log("Low prices: ", highPriceFurnitures)
    res.status(200).json(highPriceFurnitures)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på furnitures"})
  }
}


//search by low price
export const searchFurnituresByLowPrice = async (req:Request, res:Response) =>{
  try{
    const furnitures = await  Furniture.find();
    const lowPriceFurnitures = furnitures.filter((furniture) => furniture.price as number == 200)
   console.log("Low prices: ", lowPriceFurnitures)
    res.status(200).json(lowPriceFurnitures)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}
