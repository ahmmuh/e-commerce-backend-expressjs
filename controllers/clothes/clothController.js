import { Cloth } from "../../models/clothes/Cloth.js";
import { User } from "../../models/users/user.js";

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
  const { name, description, images, price, user } = req.body;
  const ownerUser = await User.findById(req.body.user);
  if (!ownerUser) return res.status(404).send("User Not found");
  try {
    const newCloth = new Cloth({
      name,
      description,
      images,
      price,
      user,
    });
    newCloth = await newCloth.save();
    console.log("The new Cloth is here ", newCloth);
    res.status(201).send({ message: "One Cloth has been created" });
  } catch (error) {
    res.send(error);
  }
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
