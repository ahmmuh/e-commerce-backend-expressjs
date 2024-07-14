"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchHousesByLowPrice = exports.searchHousesByHighPrice = exports.searchHousesByName = exports.getHousesWithPagination = exports.deleteHouse = exports.updateHouse = exports.createHouse = exports.getHouse = exports.getHouses = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const HouseModel_js_1 = require("../../models/houses/HouseModel.js");
const user_js_1 = require("../../models/users/user.js");
const getHouses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel_js_1.House.find();
        res.status(200).send(houses);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getHouses = getHouses;
const getHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const house = yield HouseModel_js_1.House.findById(req.params.id);
    if (house) {
        res.status(200).send(house);
    }
    res.status(400).json({ success: false, message: "House Not found" });
});
exports.getHouse = getHouse;
const createHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { houseType, yearBuilt, squareMeters, price, rooms, wifi, water, toilets, address, location, parking, busConnection, category, user, } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newHouse = new HouseModel_js_1.House({
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
        yield newHouse.save();
        console.log("The new House is here ", newHouse);
        res.status(201).json({ message: "One House has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createHouse = createHouse;
const updateHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const house = yield HouseModel_js_1.House.findByIdAndUpdate(req.params.id, req.body);
        if (!house)
            throw Error("House Not found");
        res.status(200).send();
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateHouse = updateHouse;
const deleteHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const house = yield HouseModel_js_1.House.findByIdAndDelete(req.params.id);
        if (!house)
            throw Error("No House found");
        res.status(200).send("Deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteHouse = deleteHouse;
// extra functions
const getHousesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const houses = yield HouseModel_js_1.House.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedHouses = houses.slice(offset, offset + pageSize);
        res.status(200).json(paginatedHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated houses" });
    }
});
exports.getHousesWithPagination = getHousesWithPagination;
const searchHousesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const housesSearchedByNames = yield HouseModel_js_1.House.find({ name });
        if (!housesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(housesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchHousesByName = searchHousesByName;
//high price
const searchHousesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel_js_1.House.find();
        const highPriceHouses = houses.filter((house) => house.price >= 200);
        console.log("Low prices: ", highPriceHouses);
        res.status(200).json(highPriceHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på houses" });
    }
});
exports.searchHousesByHighPrice = searchHousesByHighPrice;
//search by low price
const searchHousesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel_js_1.House.find();
        const lowPriceHouses = houses.filter((house) => house.price < 200);
        console.log("Low prices: ", lowPriceHouses);
        res.status(200).json(lowPriceHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchHousesByLowPrice = searchHousesByLowPrice;
