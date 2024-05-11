import { House } from "../../models/houses/HouseModel.js";

export const getHouses = async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).send(houses);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getHouse = async (req, res) => {
  const house = await House.findById(req.params.id);

  if (house) {
    res.status(200).send(house);
  }
  res.status(400).json({ success: false, message: "House Not found" });
};

export const createHouse = async (req, res) => {
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
  } = req.body;
  try {
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
    });
    newHouse = await newHouse.save();
    console.log("The new House is here ", newHouse);
    res.status(201).json({ message: "One House has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndUpdate(req.params.id, req.body);
    if (!house) throw Error("House Not found");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const house = await House.findByIdAndDelete(req.params.id);
    if (!house) throw Error("No House found");
    res.json({ success: true });
  } catch (error) {
    res.json({ msg: error });
  }
};
