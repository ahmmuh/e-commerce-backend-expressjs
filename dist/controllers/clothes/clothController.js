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
exports.searchClothesByLowPrice = exports.searchClothesByHighPrice = exports.searchClothesByName = exports.getClothesWithPagination = exports.deleteCloth = exports.updateCloth = exports.getCloth = exports.getClothes = exports.createCloth = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Cloth_js_1 = require("../../models/clothes/Cloth.js");
const user_js_1 = require("../../models/users/user.js");
const Electronic_js_1 = require("../../models/electronics/Electronic.js");
const mongoose_1 = require("mongoose");
const createCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, images, price, user, category, thumbnail } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || !ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newCloth = new Cloth_js_1.Cloth({
            name,
            description,
            images,
            price,
            user,
            category,
            thumbnail,
        });
        yield newCloth.save();
        console.log("The new Cloth is here ", newCloth);
        res.status(201).send({ message: "One Cloth has been created" });
    }
    catch (error) {
        console.error("Error creating cloth");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createCloth = createCloth;
const getClothes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Cloth_js_1.Cloth.find();
        res.status(200).send(clothes);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getClothes = getClothes;
const getCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cloth = yield Cloth_js_1.Cloth.findById(req.params.id);
    if (cloth) {
        res.status(200).send(cloth);
    }
    res.status(400).json({ success: false, message: "Cloth Not found" });
});
exports.getCloth = getCloth;
const updateCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloth = yield Cloth_js_1.Cloth.findByIdAndUpdate(req.params.id, req.body);
        if (!cloth)
            throw new mongoose_1.Error("Cloth Not found");
        res.status(200).send({ message: "One Cloth has been updated" });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateCloth = updateCloth;
const deleteCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloth = yield Cloth_js_1.Cloth.findByIdAndDelete(req.params.id);
        if (!cloth)
            throw new mongoose_1.Error("No Cloth found");
        res.status(200).send("deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteCloth = deleteCloth;
const getClothesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const clothes = yield Cloth_js_1.Cloth.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedClothes = clothes.slice(offset, offset + pageSize);
        res.status(200).json(paginatedClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginatedClothes" });
    }
});
exports.getClothesWithPagination = getClothesWithPagination;
const searchClothesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const clothesSearchedByNames = yield Cloth_js_1.Cloth.find({ name });
        if (!clothesSearchedByNames)
            throw new mongoose_1.Error("Name finns inte");
        res.status(200).json(clothesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchClothesByName = searchClothesByName;
//high price
const searchClothesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Cloth_js_1.Cloth.find();
        const highPriceClothes = clothes.filter((cloth) => cloth.price >= 200);
        console.log("Low prices: ", highPriceClothes);
        res.status(200).json(highPriceClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på Clothes" });
    }
});
exports.searchClothesByHighPrice = searchClothesByHighPrice;
//search by low price
const searchClothesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Electronic_js_1.Electronic.find();
        const lowPriceClothes = clothes.filter((cloth) => cloth.price < 200);
        console.log("Low prices: ", lowPriceClothes);
        res.status(200).json(lowPriceClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchClothesByLowPrice = searchClothesByLowPrice;
