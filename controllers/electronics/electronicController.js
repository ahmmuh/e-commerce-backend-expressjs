import { Electronic } from "../../models/electronics/Electronic.js";

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
  const { name, description, images, price, owner, location } = req.body;
  try {
    const newElectronic = new Electronic({
      name,
      description,
      images,
      price,
      owner,
      location,
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
    res.status(200).json({ success: true });
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
