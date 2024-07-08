import { Category } from "../../category_subcategory/model/Category.js";
import { Cloth } from "../../models/clothes/Cloth.js";
import { User } from "../../models/users/user.js";
import multer from "multer";
import { Electronic } from "../../models/electronics/Electronic.js";
import { Error } from "mongoose";

export const createCloth = async (req, res) => {
  const { name, description, images, price, thumbnail } = req.body;

  // const foundedCategory = await Category.findById(req.body.category);
  // if (!foundedCategory) return res.status(404).send("Not valid category");

  // const ownerUser = await User.findById(req.body.user);
  // if (!ownerUser) return res.status(404).send("User Not found");
  try {
    const newCloth = new Cloth({
      name,
      description,
      images,
      price,
      // user,
      // category,
      thumbnail,
    });
     newCloth = await newCloth.save();
    console.log("The new Cloth is here ", newCloth);
    res.status(201).send({ message: "One Cloth has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const getClothes = async (req, res) => {
  try {
    const clothes = await Cloth.find();
    res.status(200).send(clothes);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getCloth = async (req, res) => {
  const cloth = await Cloth.findById(req.params.id);

  if (cloth) {
    res.status(200).send(cloth);
  }
  res.status(400).json({ success: false, message: "Cloth Not found" });
};

export const updateCloth = async (req, res) => {
  try {
    const cloth = await Cloth.findByIdAndUpdate(req.params.id, req.body);
    if (!cloth) throw Error("Cloth Not found");
    res.status(200).send({ message: "One Cloth has been updated" });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteCloth = async (req, res) => {
  try {
    const cloth = await Cloth.findByIdAndDelete(req.params.id);
    if (!cloth) throw Error("No Cloth found");
    res.status(200).send("deleted");
  } catch (error) {
    res.json({ msg: error });
  }
};


export const getClothesWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const clothes = await Cloth.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedClothes = clothes.slice(offset, offset + pageSize);

    res.status(200).json(paginatedClothes);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginatedClothes" });
  }
};
export const searchClothesByName = async (req,res) =>{
  try {
    const {name} = req.query;
    const clothesSearchedByNames = await Cloth.find({name});
    if (!clothesSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(clothesSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchClothesByHighPrice = async (req,res) =>{
  try{
    const clothes = await  Cloth.find();
    const highPriceClothes = clothes.filter((cloth) => cloth.price >= 200);
    console.log("Low prices: ", highPriceClothes)
    res.status(200).json(highPriceClothes)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på Clothes"})
  }
}


//search by low price
export const searchClothesByLowPrice = async (req,res) =>{
  try{
    const clothes = await  Electronic.find();
    const lowPriceClothes = clothes.filter((cloth) => cloth.price < 200);
    console.log("Low prices: ", lowPriceClothes)
    res.status(200).json(lowPriceClothes)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}
