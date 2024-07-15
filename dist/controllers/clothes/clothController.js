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
import { Cloth } from "../../models/clothes/Cloth.js";
import { User } from "../../models/users/user.js";
import { Electronic } from "../../models/electronics/Electronic.js";
import { Error } from "mongoose";
export const createCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, images, price, user, category, thumbnail } = req.body;
        const foundedCategory = yield Category.findById(req.body.category);
        const ownerUser = yield User.findById(req.body.user);
        if (!foundedCategory || !ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newCloth = new Cloth({
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
export const getClothes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Cloth.find();
        res.status(200).send(clothes);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cloth = yield Cloth.findById(req.params.id);
    if (cloth) {
        res.status(200).send(cloth);
    }
    res.status(400).json({ success: false, message: "Cloth Not found" });
});
export const updateCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloth = yield Cloth.findByIdAndUpdate(req.params.id, req.body);
        if (!cloth)
            throw new Error("Cloth Not found");
        res.status(200).send({ message: "One Cloth has been updated" });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteCloth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloth = yield Cloth.findByIdAndDelete(req.params.id);
        if (!cloth)
            throw new Error("No Cloth found");
        res.status(200).send("deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
export const getClothesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida
        // (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const clothes = yield Cloth.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedClothes = clothes.slice(offset, offset + pageSize);
        res.status(200).json(paginatedClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginatedClothes" });
    }
});
export const searchClothesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const clothesSearchedByNames = yield Cloth.find({ name });
        if (!clothesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(clothesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchClothesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Cloth.find();
        const highPriceClothes = clothes.filter((cloth) => cloth.price >= 200);
        console.log("Low prices: ", highPriceClothes);
        res.status(200).json(highPriceClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på Clothes" });
    }
});
//search by low price
export const searchClothesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clothes = yield Electronic.find();
        const lowPriceClothes = clothes.filter((cloth) => cloth.price < 200);
        console.log("Low prices: ", lowPriceClothes);
        res.status(200).json(lowPriceClothes);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
