import { Category } from "../../category_subcategory/model/Category.js";
import { Electronic } from "../../models/electronics/Electronic.js";
import { User } from "../../models/users/user.js";
import fs from "fs";
import { Error } from "mongoose";
import { Request, Response } from "express";
export const getElectronics = async (req:Request, res:Response) => {
  try {
    const electronics = await Electronic.find();
   //electronics = [...electronics].map((electronic) =>
    // Buffer.from(electronic.thumbnailImage))
    res.status(200).send(electronics);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getElectronic = async (req:Request, res:Response) => {
  const electronic = await Electronic.findById(req.params.id);

  if (Electronic) {
    res.status(200).send(electronic);
  }
  res.status(400).json({ success: false, message: "Electronic Not found" });
};

export const createElectronic = async (req:Request, res:Response) => {
  const {
    name,
    description,
    price,
    user,
    category,
    batteryHealth,
    screenSize,
    images,
    color,
    condition,
    receipt,
    ownershipDuration,
    location,
    thumbnailImage
  } = req.body;
     const foundedCategory = await Category.findById(req.body.category);
   const ownerUser = await User.findById(req.body.user);
  if (!foundedCategory || !ownerUser) return res.status(400).json({error: "Invalid category or user"})

  try {

    const uploadedImage = req.file;
  //const createdImage = Date.now()  + '-' + uploadedImage.originalname
    let newElectronic = new Electronic({
      name,
      description,
      price,
      user,
      category,
      batteryHealth,
      screenSize,
      images,
      color,
      condition,
      receipt,
      ownershipDuration,
      location,
      thumbnailImage
    });
    await newElectronic.save();
    console.log("The new Electronic is here ", newElectronic);
    res.status(201).json({ message: "One Electronic has been created" });
  } catch (error) {
     console.log(error)
    res.send(error);
  }
};

export const updateElectronic = async (req:Request, res:Response) => {
  try {
    const electronic = await Electronic.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!electronic) throw new Error("Electronic Not found");
    res.status(200).send("Electronic updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteElectronic = async (req:Request, res:Response) => {
  try {
    const electronic = await Electronic.findByIdAndDelete(req.params.id);
    if (!electronic) throw new Error("No Electronic found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
}

  export const searchByName = async (req:Request, res:Response) =>{
    try {
      const {name} = req.query;
      const electronicSearchedByNames = await Electronic.find({name});
      if (!electronicSearchedByNames) throw new Error("Name finns inte")
      res.status(200).json(electronicSearchedByNames)
    }
    catch (error) {
      res.status(500).json({message:"Something went wrong"})
    }

};


//high price
export const searchByHighPrice = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const highPriceElectronics = electronics.filter((electronic) => electronic.price as number >= 200);
    console.log("Low prices: ", highPriceElectronics)
    res.status(200).json(highPriceElectronics)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på Electronics"})
  }
}


//search by low price
export const searchByLowPrice = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
     const lowPriceElectronics = electronics.filter((electronic) => electronic.price as number <= 200);
   console.log("Low prices: ", lowPriceElectronics)
    res.status(200).json(lowPriceElectronics)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}


//new electronics
export const getNewElectronics = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const newElectronics = electronics.filter((electronic) => electronic.condition === "new");
    res.status(200).json(newElectronics)
  }
  catch (e) {
    res.status(500).json({message:"Fel med newElectronics"})
  }
}

export const getElectronicsByReciepts = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const electronicsWithReciepts = electronics.filter((electronic) => electronic.receipt === "yes");
    res.status(200).json(electronicsWithReciepts)
  }
  catch (e) {
    res.status(500).json({message:"Fel electronic med recipet"})
  }
}


//screen sizes

export const getElectronicsWithLargeScreen = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const electronicsWithLargeScreen = electronics.filter((electronic) => electronic.screenSize === "large");
    res.status(200).json(electronicsWithLargeScreen)
  }
  catch (e) {
    res.status(500).json({message:"Fel electronicsWithLargeScreen"})
  }
}

export const getElectronicsWithMediumScreen = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const electronicsWithMediumScreen = electronics.filter((electronic) => electronic.screenSize === "medium");
    res.status(200).json(electronicsWithMediumScreen)
  }
  catch (e) {
    res.status(500).json({message:"Fel electronicsWithMediumScreen"})
  }
}


export const getElectronicsWithSmallScreen = async (req:Request, res:Response) =>{
  try{
    const electronics = await  Electronic.find();
    const electronicsWithSmallScreen = electronics.filter((electronic) => electronic.screenSize === "small");
    res.status(200).json(electronicsWithSmallScreen)
  }
  catch (e) {
    res.status(500).json({message:"Fel electronics With Small Screen"})
  }
}

export const getElectronicsWithPagination = async (req:Request, res:Response) => {
  try {
    const currentPage = parseInt(req.query.page as string) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const electronics = await Electronic.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedElectronics = electronics.slice(offset, offset + pageSize);

    res.status(200).json(paginatedElectronics);
  } catch (e) {
    res.status(500).json({ message: "Fel med electronics With Small Screen" });
  }
};
