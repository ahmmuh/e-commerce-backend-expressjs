import { Category } from "../../category_subcategory/model/Category.js";
import { Electronic } from "../../models/electronics/Electronic.js";
import { User } from "../../models/users/user.js";
import fs from "fs";
export const getElectronics = async (req, res) => {
  try {
    const electronics = await Electronic.find();
    res.status(200).send(electronics);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getElectronic = async (req, res) => {
  const electronic = await Electronic.findById(req.params.id);

  if (Electronic) {
    res.status(200).send(electronic);
  }
  res.status(400).json({ success: false, message: "Electronic Not found" });
};

export const createElectronic = async (req, res) => {
  const {
    name,
    description,
    price,
    // user,
    // category,
    batteryHealth,
    screenSize,
    // images,
    colors,
    condition,
    receipt,
    ownershipDuration,
    location,
    thumbnailImage,
  } = req.body;
  // const foundedCategory = await Category.findById(req.body.category);
  // if (!foundedCategory) return res.status(404).send("Not valid category");

  // const ownerUser = await User.findById(req.body.user);
  // if (!ownerUser) return res.status(404).send("User not found");
  try {
    const newElectronic = new Electronic({
      name,
      description,
      price,
      // user,
      // category,
      batteryHealth,
      screenSize,
      // images,
      colors,
      condition,
      receipt,
      ownershipDuration,
      location,
      thumbnailImage: {
        data: fs.readFileSync(thumbnailImage),
        contentType: "image/png",
      },
    });
    newElectronic = await newElectronic.save();
    console.log("The new Electronic is here ", newElectronic);
    res.status(201).json({ message: "One Electronic has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateElectronic = async (req, res) => {
  try {
    const electronic = await Electronic.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!electronic) throw Error("Electronic Not found");
    res.status(200).send("Electronic updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteElectronic = async (req, res) => {
  try {
    const electronic = await Electronic.findByIdAndDelete(req.params.id);
    if (!electronic) throw Error("No Electronic found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};
