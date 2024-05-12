import { Category } from "../../category_subcategory/model/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.status(200).send(category);
  }
  res.status(400).json({ success: false, message: "Category Not found" });
};

export const createCategory = async (req, res) => {
  const { name, icon, color } = req.body;
  try {
    const category = new Category({
      name,
      icon,
      color,
    });
    category = await category.save();
    console.log("New category ", category);
    res
      .status(201)
      .json({ category: category, message: "One category has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) throw Error("category Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) throw Error("No category found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};
