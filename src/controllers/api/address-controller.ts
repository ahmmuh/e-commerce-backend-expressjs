import { Address } from "../models/Address";
import {Request, Response} from "express";
import { User } from "../models/users/user";

export const getAddressList = async (req: Request, res: Response) => {
  try {
    const addresses = await Address.find();
    res.status(200).send(addresses);
  }
  catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


export const getAddress = async (req:Request,res: Response) =>{
 try {
   const address = await Address.findById(req.body.id)
   res.status(200).send(address);
 }
  catch (error) {
   res.status(500).json({error: "Internal server error"})
  }

}


export  const addNewAddress = async (req:Request,res:Response) => {
  const {
    streetName,
    city,
    state,
    postalCode,
    buildingNumber,
    user

  } = req.body
 /* const addressOwner = await User.findById(req.params.id)
  if (!addressOwner) throw new Error("The owner of this address was not found")*/
  try {
  const newAddress = new Address({
    streetName,
    city,
    state,
    postalCode,
    buildingNumber,
    user
  })
    console.log("NEW Address", newAddress)
    await newAddress.save();
  res.status(201).json({ message: "One address has been created" });

  }
  catch (error){
    res.status(500).json({error: "Internal server error"})
  }

}

export const updateAddress = async (req:Request,res:Response) =>{
  const addressOwner = await User.findById(req.params.id)
  if (!addressOwner) throw new Error("The owner of this address was not found")
  const updatedAddress = await Address.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  try {

  if (!updatedAddress || !addressOwner) throw new Error("Address or the" +
    " ownner not found")
  res.status(200).send(updatedAddress);
}
catch (error){
  res.status(500).json({error: "Internal server error"})
}
}



export const deleteAddress = async (req:Request,res:Response) => {
  try {
    const findUser = await User.findByIdAndDelete(req.params.id)
    if (!findUser) throw Error("User Not found");
    res.status(200).send(findUser);
  }
  catch (error){
    res.status(500).json({error: "Internal server error"})

  }
}



export const getAddressByCity = async (req:Request,res:Response) => {
  const {city} = req.query;
  const getCityByName = await Address.find({city})
  try {
    if (!getCityByName) throw new Error("City not found");
    res.status(200).send(getCityByName);
  }
  catch (error){
    res.status(500).json({error: "Internal server error"})
  }
}