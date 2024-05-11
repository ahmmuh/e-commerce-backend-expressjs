import { Cloth } from "../../models/clothes/Cloth.js";

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

export const createCloth = async (req, res) => {
  const { name, description, images, price } = req.body;
  try {
    const newCloth = new Cloth({
      name,
      description,
      images,
      price,
    });
    newCloth = await newCloth.save();
    console.log("The new Cloth is here ", newCloth);
    res.status(201).json({ message: "One Cloth has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateCloth = async (req, res) => {
  try {
    const cloth = await Cloth.findByIdAndUpdate(req.params.id, req.body);
    if (!cloth) throw Error("Cloth Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteCloth = async (req, res) => {
  try {
    const cloth = await Cloth.findByIdAndDelete(req.params.id);
    if (!cloth) throw Error("No Cloth found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};
