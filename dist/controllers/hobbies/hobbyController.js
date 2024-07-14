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
exports.searchHobbiesByLowPrice = exports.searchHobbiesByHighPrice = exports.searchHobbiesByName = exports.getHobbiesWithPagination = exports.deleteHobby = exports.updateHobby = exports.createHobby = exports.getHobby = exports.getHobbies = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Hobby_js_1 = require("../../models/hobbies/Hobby.js");
const user_js_1 = require("../../models/users/user.js");
const getHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby_js_1.Hobby.find();
        res.status(200).send(hobbies);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getHobbies = getHobbies;
const getHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hobby = yield Hobby_js_1.Hobby.findById(req.params.id);
    if (hobby) {
        res.status(200).send(hobby);
    }
    res.status(400).json({ success: false, message: "Hobby Not found" });
});
exports.getHobby = getHobby;
const createHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, images, price, user, location, category } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newHobby = new Hobby_js_1.Hobby({
            name,
            description,
            images,
            price,
            user,
            location,
            category,
        });
        yield newHobby.save();
        console.log("The new Hobby is here ", newHobby);
        res.status(201).json({ message: "One Hobby has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createHobby = createHobby;
const updateHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby_js_1.Hobby.findByIdAndUpdate(req.params.id, req.body);
        if (!hobby)
            throw Error("Hobby Not found");
        res.status(200).send("Sno updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateHobby = updateHobby;
const deleteHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby_js_1.Hobby.findByIdAndDelete(req.params.id);
        if (!hobby)
            throw Error("No Hobby found");
        res.status(200).send("hobby deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteHobby = deleteHobby;
// extra functions
const getHobbiesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const hobbies = yield Hobby_js_1.Hobby.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedHobbies = hobbies.slice(offset, offset + pageSize);
        res.status(200).json(paginatedHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated hobbies" });
    }
});
exports.getHobbiesWithPagination = getHobbiesWithPagination;
const searchHobbiesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const hobbiesSearchedByNames = yield Hobby_js_1.Hobby.find({ name });
        if (!hobbiesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(hobbiesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchHobbiesByName = searchHobbiesByName;
//high price
const searchHobbiesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby_js_1.Hobby.find();
        const highPriceHobbies = hobbies.filter((hobby) => hobby.price >= 200);
        console.log("Low prices: ", highPriceHobbies);
        res.status(200).json(highPriceHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på hobbies" });
    }
});
exports.searchHobbiesByHighPrice = searchHobbiesByHighPrice;
//search by low price
const searchHobbiesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby_js_1.Hobby.find();
        const lowPriceHobbies = hobbies.filter((hobby) => hobby.price < 200);
        console.log("Low prices: ", lowPriceHobbies);
        res.status(200).json(lowPriceHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchHobbiesByLowPrice = searchHobbiesByLowPrice;
