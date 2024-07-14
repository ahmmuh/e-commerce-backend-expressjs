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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBoatsByLowPrice = exports.searchBoatsByHighPrice = exports.searchBoatsByName = exports.getBoatsWithPagination = exports.deleteBoat = exports.updateBoat = exports.createBoat = exports.getBoat = exports.getBoats = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Boat_js_1 = require("../../models/hobbies/Boat.js");
const user_js_1 = require("../../models/users/user.js");
const fs_1 = __importDefault(require("fs"));
const getBoats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boats = yield Boat_js_1.Boat.find();
        res.status(200).send(boats);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getBoats = getBoats;
const getBoat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boat = yield Boat_js_1.Boat.findById(req.params.id);
    if (boat) {
        res.status(200).send(boat);
    }
    res.status(400).json({ success: false, message: "Boat Not found" });
});
exports.getBoat = getBoat;
const createBoat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, model, description, price, user, category, image } = req.body;
        const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
        const ownerUser = yield user_js_1.User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newBoat = new Boat_js_1.Boat({
            name,
            model,
            description,
            price,
            category,
            user,
            image: {
                data: fs_1.default.readFileSync(image),
                contentType: "image/png",
            },
        });
        yield newBoat.save();
        console.log("The new Boat is here ", newBoat);
        res.status(201).json({ message: "One Boat has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createBoat = createBoat;
const updateBoat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boat = yield Boat_js_1.Boat.findByIdAndUpdate(req.params.id, req.body);
        if (!boat)
            throw Error("Boat Not found");
        res.status(200).send("Boat updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateBoat = updateBoat;
const deleteBoat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boat = yield Boat_js_1.Boat.findByIdAndDelete(req.params.id);
        if (!boat)
            throw Error("No Boat found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteBoat = deleteBoat;
// extra functions
const getBoatsWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const boats = yield Boat_js_1.Boat.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedBoats = boats.slice(offset, offset + pageSize);
        res.status(200).json(paginatedBoats);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated Boats" });
    }
});
exports.getBoatsWithPagination = getBoatsWithPagination;
const searchBoatsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const boatsSearchedByNames = yield Boat_js_1.Boat.find({ name });
        if (!boatsSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(boatsSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchBoatsByName = searchBoatsByName;
//high price
const searchBoatsByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boats = yield Boat_js_1.Boat.find();
        const highPriceBoats = boats.filter((boat) => boat.price >= 200);
        console.log("Low prices: ", highPriceBoats);
        res.status(200).json(highPriceBoats);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på boats" });
    }
});
exports.searchBoatsByHighPrice = searchBoatsByHighPrice;
//search by low price
const searchBoatsByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boats = yield Boat_js_1.Boat.find();
        const lowPriceBoats = boats.filter((boat) => boat.price < 200);
        console.log("Low prices: ", lowPriceBoats);
        res.status(200).json(lowPriceBoats);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchBoatsByLowPrice = searchBoatsByLowPrice;
