import { Category } from "../../category_subcategory/model/Category.js";
import { Boat } from "../../models/hobbies/Boat.js";
import { User } from "../../models/users/user.js";
import fs from "fs";
export const getBoats = async (req, res) => {
  try {
    const boats = await Boat.find();
    res.status(200).send(boats);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getBoat = async (req, res) => {
  const boat = await Boat.findById(req.params.id);

  if (boat) {
    res.status(200).send(boat);
  }
  res.status(400).json({ success: false, message: "Boat Not found" });
};

export const createBoat = async (req, res) => {
  const { name, model, description, price, image } = req.body;
  // const foundedCategory = await Category.findById(req.body.category);
  // if (!foundedCategory) return res.status(404).send("Not valid category");

  // const ownerUser = await User.findById(req.body.user);
  // if (!ownerUser) return res.status(404).send("User not found");
  try {
    const newBook = new Boat({
      name,
      model,
      description,
      price,
      image: {
        data: fs.readFileSync(image),
        contentType: "image/png",
      },
    });
    newBoat = await newBoat.save();
    console.log("The new Boat is here ", newBoat);
    res.status(201).json({ message: "One Boat has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateBoat = async (req, res) => {
  try {
    const boat = await Boat.findByIdAndUpdate(req.params.id, req.body);
    if (!boat) throw Error("Boat Not found");
    res.status(200).send("Boat updated");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteBoat = async (req, res) => {
  try {
    const boat = await Boat.findByIdAndDelete(req.params.id);
    if (!boat) throw Error("No Boat found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};


// extra functions

export const getBoatsWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const boats = await Boat.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedBoats = boats.slice(offset, offset + pageSize);

    res.status(200).json(paginatedBoats);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated Boats" });
  }
};
export const searchBoatsByName = async (req,res) =>{
  try {
    const {name} = req.query;
    const boatsSearchedByNames = await Boat.find({name});
    if (!boatsSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(boatsSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchBoatsByHighPrice = async (req,res) =>{
  try{
    const boats = await  Boat.find();
    const highPriceBoats = boats.filter((boat) => boat.price >= 200);
    console.log("Low prices: ", highPriceBoats)
    res.status(200).json(highPriceBoats)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på boats"})
  }
}


//search by low price
export const searchBoatsByLowPrice = async (req,res) =>{
  try{
    const boats = await  Boat.find();
    const lowPriceBoats = boats.filter((boat) => boat.price < 200);
    console.log("Low prices: ", lowPriceBoats)
    res.status(200).json(lowPriceBoats)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}