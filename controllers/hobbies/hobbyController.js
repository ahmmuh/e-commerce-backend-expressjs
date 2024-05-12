import { Hobby } from "../../models/hobbies/Hobby.js";
import { User } from "../../models/users/user.js";

export const getHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.find();
    res.status(200).send(hobbies);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getHobby = async (req, res) => {
  const hobby = await Hobby.findById(req.params.id);

  if (hobby) {
    res.status(200).send(hobby);
  }
  res.status(400).json({ success: false, message: "Hobby Not found" });
};

export const createHobby = async (req, res) => {
  const { name, description, images, price, user, location } = req.body;
  const ownerUser = await User.findById(req.body.user);
  if (!ownerUser) return res.status(404).send("User not found");

  try {
    const newHobby = new Hobby({
      name,
      description,
      images,
      price,
      user,
      location,
    });
    newHobby = await newHobby.save();
    console.log("The new Hobby is here ", newHobby);
    res.status(201).json({ message: "One Hobby has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndUpdate(req.params.id, req.body);
    if (!hobby) throw Error("Hobby Not found");
    res.status(200).send("Sno updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndDelete(req.params.id);
    if (!hobby) throw Error("No Hobby found");
    res.status(200).send("hobby deleted");
  } catch (error) {
    res.json({ msg: error });
  }
};
