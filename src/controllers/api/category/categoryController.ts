import { Category } from "../../category_subcategory/model/Category.js";
import {Request, Response} from "express";
export const getCategories = async (req:Request, res:Response) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getCategory = async (req:Request, res:Response) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.status(200).send(category);
  }
  res.status(400).json({ success: false, message: "Category Not found" });
};



export const createCategory = async (req:Request, res:Response) => {
  const { name, icon, color } = req.body;
  try {
    const category = new Category({
      name,
      icon,
      color,
    });
     await category.save();
    console.log("New category ", category);
    res
      .status(201)
      .json({ category: category, message: "One category has been created" });
  } catch (error) {
    console.error("Error creating category")
    res.status(500).json({ error: "Internal server error" });

  }
};

export const updateCategory = async (req:Request, res:Response) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) throw Error("category Not found");
    console.log("Started from controll")
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteCategory = async (req:Request, res:Response) => {
  try {
    const category =
      await Category.findByIdAndDelete(req.params.id);
    if (!category) throw Error("No category found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};


