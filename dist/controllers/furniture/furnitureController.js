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
import { Furniture } from "../../models/furniture/Furniture.js";
import { User } from "../../models/users/user.js";
import { Error } from "mongoose";
export const getFurnitures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture.find();
        res.status(200).send(furnitures);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const furniture = yield Furniture.findById(req.params.id);
    if (Furniture) {
        res.status(200).send(furniture);
    }
    res.status(400).json({ success: false, message: "Furniture Not found" });
});
export const createFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, images, location, user, category } = req.body;
        const foundedCategory = yield Category.findById(req.body.category);
        const ownerUser = yield User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newFurniture = new Furniture({
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
export const updateFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furniture = yield Furniture.findByIdAndUpdate(req.params.id, req.body);
        if (!furniture)
            throw new Error("Furniture Not found");
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furniture = yield Furniture.findByIdAndDelete(req.params.id);
        if (!furniture)
            throw new Error("No Furniture found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
// extra functions
export const getFurnituresWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const furnitures = yield Furniture.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedFurnitures = furnitures.slice(offset, offset + pageSize);
        res.status(200).json(paginatedFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginatedFurnitures" });
    }
});
export const searchFurnituresByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const furnituresSearchedByNames = yield Furniture.find({ name });
        if (!furnituresSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(furnituresSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchFurnituresByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture.find();
        const highPriceFurnitures = furnitures.filter((furniture) => furniture.price >= 200);
        console.log("Low prices: ", highPriceFurnitures);
        res.status(200).json(highPriceFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på furnitures" });
    }
});
//search by low price
export const searchFurnituresByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furnitures = yield Furniture.find();
        const lowPriceFurnitures = furnitures.filter((furniture) => furniture.price == 200);
        console.log("Low prices: ", lowPriceFurnitures);
        res.status(200).json(lowPriceFurnitures);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
