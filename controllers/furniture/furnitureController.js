import { Category } from "../../category_subcategory/model/Category.js";
import { Furniture } from "../../models/furniture/Furniture.js";
import { User } from "../../models/users/user.js";

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
