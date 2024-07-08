import { User } from "../../models/users/user.js";
import bcrypt from "bcrypt";
import { House } from "../../models/houses/HouseModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const countUsers = async (req, res) => {
  try {
    const countedDocument = await User.find().toArray().countDocuments();
    res.status(200).send(countedDocument);
  } catch (error) {
    re.status(500).json({ success: false });
  }
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.status(200).send(user);
  }
  res.status(400).json({ success: false, message: "User Not found" });
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, birthDay } =
    req.body;
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      birthDay,
    });
    const user = await newUser.save();
    res.status(201).send({ user: user, message: "One user has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) throw Error("Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw Error("No user found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};



export const getUsersWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const users = await User.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedUsers = users.slice(offset, offset + pageSize);

    res.status(200).json(paginatedUsers);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated users" });
  }
};
export const searchUsersByName = async (req,res) =>{
  try {
    const {name} = req.query;
    const usersSearchedByNames = await User.find({name});
    if (!usersSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(usersSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};
