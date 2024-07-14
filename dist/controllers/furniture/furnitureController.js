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
exports.searchFurnituresByLowPrice = exports.searchFurnituresByHighPrice = exports.searchFurnituresByName = exports.getFurnituresWithPagination = exports.deleteFurniture = exports.updateFurniture = exports.createFurniture = exports.getFurniture = exports.getFurnitures = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Furniture_js_1 = require("../../models/furniture/Furniture.js");
const user_js_1 = require("../../models/users/user.js");
const mongoose_1 = require("mongoose");
const getFurnitures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture_js_1.Furniture.find();
        res.status(200).send(furnitures);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getFurnitures = getFurnitures;
const getFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const furniture = yield Furniture_js_1.Furniture.findById(req.params.id);
    if (Furniture_js_1.Furniture) {
        res.status(200).send(furniture);
    }
    res.status(400).json({ success: false, message: "Furniture Not found" });
});
exports.getFurniture = getFurniture;
const createFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, images, location, user, category } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newFurniture = new Furniture_js_1.Furniture({
            name,
            description,
            images,
            price,
            location,
            user,
            category,
        });
        yield newFurniture.save();
        console.log("The new Furniture is here ", newFurniture);
        res.status(201).send("Funiture created");
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createFurniture = createFurniture;
const updateFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furniture = yield Furniture_js_1.Furniture.findByIdAndUpdate(req.params.id, req.body);
        if (!furniture)
            throw new mongoose_1.Error("Furniture Not found");
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateFurniture = updateFurniture;
const deleteFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furniture = yield Furniture_js_1.Furniture.findByIdAndDelete(req.params.id);
        if (!furniture)
            throw new mongoose_1.Error("No Furniture found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteFurniture = deleteFurniture;
// extra functions
const getFurnituresWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const furnitures = yield Furniture_js_1.Furniture.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedFurnitures = furnitures.slice(offset, offset + pageSize);
        res.status(200).json(paginatedFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginatedFurnitures" });
    }
});
exports.getFurnituresWithPagination = getFurnituresWithPagination;
const searchFurnituresByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const furnituresSearchedByNames = yield Furniture_js_1.Furniture.find({ name });
        if (!furnituresSearchedByNames)
            throw new mongoose_1.Error("Name finns inte");
        res.status(200).json(furnituresSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchFurnituresByName = searchFurnituresByName;
//high price
const searchFurnituresByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture_js_1.Furniture.find();
        const highPriceFurnitures = furnitures.filter((furniture) => furniture.price >= 200);
        console.log("Low prices: ", highPriceFurnitures);
        res.status(200).json(highPriceFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på furnitures" });
    }
});
exports.searchFurnituresByHighPrice = searchFurnituresByHighPrice;
//search by low price
const searchFurnituresByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture_js_1.Furniture.find();
        const lowPriceFurnitures = furnitures.filter((furniture) => furniture.price < 200);
        console.log("Low prices: ", lowPriceFurnitures);
        res.status(200).json(lowPriceFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchFurnituresByLowPrice = searchFurnituresByLowPrice;
