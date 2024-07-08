import { Category } from "../../category_subcategory/model/Category.js";
import { Vehicle } from "../../models/Vehicles/Vehicle.js";
import { User } from "../../models/users/user.js";

export const getVehicles = async (req, res) => {
  try {
    const Vehicles = await Vehicle.find();
    res.status(200).send(Vehicles);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
};

export const getVehicle = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (vehicle) {
    res.status(200).send(vehicle);
  }
  res.status(400).json({ success: false, message: "vehicle Not found" });
};

export const createVehicle = async (req, res) => {
  const foundedCategory = await Category.findById(req.body.category);
  if (!foundedCategory) return res.status(404).send("Not valid category");

  const ownerUser = await User.findById(req.body.user);
  if (!ownerUser) return res.status(404).send("User not found");
  const {
    manufacturer,
    model,
    category,
    color,
    year,
    mileage,
    fuelType,
    horsepower,
    price,
    user,
  } = req.body;
  try {
    const newVehicle = new Vehicle({
      manufacturer,
      model,
      category,
      color,
      year,
      mileage,
      fuelType,
      horsepower,
      price,
      user,
    });
    newVehicle = await newVehicle.save();
    console.log("The new Vehicle is here ", newVehicle);
    res.status(201).send({ message: "One Vehicle has been created" });
  } catch (error) {
    res.send(error);
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body);
    if (!vehicle) throw Error("vehicle Not found");
    res.status(200).send("updated vehicle");
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) throw Error("No vehicle found");
    res.status(200).send("Deleted Vehicle");
  } catch (error) {
    res.json({ msg: error });
  }
};




// extra functions

export const getVehiclesWithPagination = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
    const pageSize = 10; // Antal objekt per sida

    const vehicles = await Vehicle.find();
    const offset = (currentPage - 1) * pageSize;
    const paginatedVehicles = vehicles.slice(offset, offset + pageSize);

    res.status(200).json(paginatedVehicles);
  } catch (e) {
    res.status(500).json({ message: "Fel med paginated vehicles" });
  }
};
export const searchVehiclesByName = async (req,res) =>{
  try {
    const {name} = req.query;
    const vehiclesSearchedByNames = await Vehicle.find({name});
    if (!vehiclesSearchedByNames) throw new Error("Name finns inte")
    res.status(200).json(vehiclesSearchedByNames)
  }
  catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

};


//high price
export const searchVehiclesByHighPrice = async (req,res) =>{
  try{
    const vehicles = await  Vehicle.find();
    const highPriceVehicles = vehicles.filter((vehicle) => vehicle.price >= 200);
    console.log("Low prices: ", highPriceVehicles)
    res.status(200).json(highPriceVehicles)
  }
  catch (e) {
    res.status(500).json({message: "Fel med high Price på vehicles"})
  }
}


//search by low price
export const searchVehiclesByLowPrice = async (req,res) =>{
  try{
    const vehicles = await  Vehicle.find();
    const lowPriceVehicles = vehicles.filter((vehicle) => vehicle.price < 200);
    console.log("Low prices: ", lowPriceVehicles)
    res.status(200).json(lowPriceVehicles)
  }
  catch (e) {
    res.status(500).json({message: "Fel med low price"})
  }
}