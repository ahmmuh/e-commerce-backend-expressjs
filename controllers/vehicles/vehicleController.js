import { Vehicle } from "../../models/Vehicles/Vehicle.js";
import { Category } from "../../models/Vehicles/Category.js";

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
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(404).send("Not valid category");
  try {
    const newVehicle = new Vehicle({
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      category: req.body.category,
      color: req.body.color,
      year: req.body.year,
      mileage: req.body.mileage,
      fuelType: req.body.fuelType,
      horsepower: req.body.horsepower,
      price: req.body.price,
    });
    newVehicle = await newVehicle.save();
    console.log("The new Vehicle is here ", newVehicle);
    res.status(201).json({ message: "One Vehicle has been created" });
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
