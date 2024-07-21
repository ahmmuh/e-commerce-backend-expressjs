import { Category } from "../../../category_subcategory/model/Category";
import { House } from "../../../models/houses/HouseModel";
import { User } from "../../../models/users/user";
import { Request, Response } from "express";

export const getHouses = async (req:Request, res:Response) => {
  try {
    const houses = await House.find();
    res.status(200).send(houses);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getHouse = async (req:Request, res:Response) => {
  const house = await House.findById(req.params.id);

  if (house) {
    res.status(200).send(house);
  }
  res.status(400).json({ success: false, message: "House Not found" });
};

export const createHouse = async (req:Request, res:Response) => {
  try {

  const {
    houseType,
    yearBuilt,
    squareMeters,
    price,
    rooms,
    wifi,
    water,
    toilets,
    address,
    location,
    parking,
    busConnection,
    category,
    user,
  } = req.body;
  const foundedCategory = await Category.findById(req.body.category);

  const ownerUser = await User.findById(req.body.user);
  if (!foundedCategory || ownerUser) return res.status(400).json({error: "Invalid category or user"})

    const newHouse = new House({
      houseType,
      yearBuilt,
      squareMeters,
      price,
      rooms,
      wifi,
      water,
      toilets,
      address,
      location,
      parking,
      busConnection,
      category,
      user,
    });
    await newHouse.save();
    console.log("The new House is here ", newHouse);
    res.status(201).json({ message: "One House has been created" });
  } catch (error) {
    console.error("Error creating category")
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateHouse = async (req:Request, res:Response) => {
  try {
    const house = await House.findByIdAndUpdate(req.params.id, req.body);
    if (!house) throw Error("House Not found");
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteHouse = async (req:Request, res:Response) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id);
    if (!house) throw Error("No House found");
    res.status(200).send("Deleted");
  } catch (error) {
    res.json({ msg: error });
  }
};


// extra functions

export const getHousesWithPagination = async (req:Request, res:Response) => {
  try {
    const currentPage = parseInt(req.query.page as string) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const houses = await House.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedHouses = houses.slice(offset, offset + pageSize);

    res.status(200).json(paginatedHouses);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated houses" });
  }
};
export const searchHousesByName = async (req:Request, res:Response) =>{
  try {
    const {name} = req.query;
    const housesSearchedByNames = await House.find({name});
    if (!housesSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(housesSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchHousesByHighPrice = async (req:Request, res:Response) =>{
  try{
    const houses = await  House.find();
    const highPriceHouses = houses.filter((house) => house.price >= 200);
    console.log("Low prices: ", highPriceHouses)
    res.status(200).json(highPriceHouses)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på houses"})
  }
}


//search by low price
export const searchHousesByLowPrice = async (req:Request, res:Response) =>{
  try{
    const houses = await  House.find();
    const lowPriceHouses = houses.filter((house) => house.price < 200);
    console.log("Low prices: ", lowPriceHouses)
    res.status(200).json(lowPriceHouses)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}