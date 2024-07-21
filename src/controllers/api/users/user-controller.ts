import { User } from "../../../models/users/user";
import { House } from "../../../models/houses/HouseModel";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const getUsers = async (req:Request, res:Response) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const countUsers = async (req:Request, res:Response) => {
  try {
    const countedDocument = await User.find().countDocuments();
    res.status(200).send(countedDocument);
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

export const getUser = async (req:Request, res:Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.status(200).send(user);
  }
  res.status(400).json({ success: false, message: "User Not found" });
};

export const createUser = async (req:Request, res:Response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    profileImage,
      address:{
        streetName,
        city,
        state,
        postalCode,
        buildingNumber
      },
    location,
    birthDay,
  } =
    req.body;
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      profileImage,
      address:{
        streetName,
        city,
        state,
        postalCode,
        buildingNumber
      },
      location,
      birthDay,
    });
    const user = await newUser.save();
    res.status(201).send({ user: user, message: "One user has been created" });
  } catch (error) {
    console.error("Error creating user")
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req:Request, res:Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) throw Error("Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteUser = async (req:Request, res:Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw Error("No user found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};



export const getUsersWithPagination = async (req:Request, res:Response) => {
  try {
    const currentPage = parseInt(req.query.page as string) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const users = await User.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedUsers = users.slice(offset, offset + pageSize);

    res.status(200).json(paginatedUsers);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated users" });
  }
};
export const searchUsersByName = async (req:Request, res:Response) =>{
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
