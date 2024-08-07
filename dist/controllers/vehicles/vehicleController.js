var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Category } from "../../category_subcategory/model/Category.js";
import { Vehicle } from "../../models/Vehicles/Vehicle.js";
import { User } from "../../models/users/user.js";
export const getVehicles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Vehicles = yield Vehicle.find();
        res.status(200).send(Vehicles);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehicle = yield Vehicle.findById(req.params.id);
    if (vehicle) {
        res.status(200).send(vehicle);
    }
    res.status(400).json({ success: false, message: "vehicle Not found" });
});
export const createVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundedCategory = yield Category.findById(req.body.category);
        const ownerUser = yield User.findById(req.body.user);
        if (!foundedCategory || !ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const { manufacturer, model, category, color, year, mileage, fuelType, horsepower, price, user, } = req.body;
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
        yield newVehicle.save();
        console.log("The new Vehicle is here ", newVehicle);
        res.status(201).send({ message: "One Vehicle has been created" });
    }
    catch (error) {
        console.error("Error creating vehicle:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
export const updateVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicle = yield Vehicle.findByIdAndUpdate(req.params.id, req.body);
        if (!vehicle)
            throw Error("vehicle Not found");
        res.status(200).send("updated vehicle");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteVehicle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicle = yield Vehicle.findByIdAndDelete(req.params.id);
        if (!vehicle)
            throw Error("No vehicle found");
        res.status(200).send("Deleted Vehicle");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
// extra functions
export const getVehiclesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const vehicles = yield Vehicle.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedVehicles = vehicles.slice(offset, offset + pageSize);
        res.status(200).json(paginatedVehicles);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated vehicles" });
    }
});
export const searchVehiclesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const vehiclesSearchedByNames = yield Vehicle.find({ name });
        if (!vehiclesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(vehiclesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchVehiclesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield Vehicle.find();
        const highPriceVehicles = vehicles.filter((vehicle) => vehicle.price >= 200);
        console.log("Low prices: ", highPriceVehicles);
        res.status(200).json(highPriceVehicles);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på vehicles" });
    }
});
//search by low price
export const searchVehiclesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield Vehicle.find();
        const lowPriceVehicles = vehicles.filter((vehicle) => vehicle.price < 200);
        console.log("Low prices: ", lowPriceVehicles);
        res.status(200).json(lowPriceVehicles);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
