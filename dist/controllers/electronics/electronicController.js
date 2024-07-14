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
exports.getElectronicsWithPagination = exports.getElectronicsWithSmallScreen = exports.getElectronicsWithMediumScreen = exports.getElectronicsWithLargeScreen = exports.getElectronicsByReciepts = exports.getNewElectronics = exports.searchByLowPrice = exports.searchByHighPrice = exports.searchByName = exports.deleteElectronic = exports.updateElectronic = exports.createElectronic = exports.getElectronic = exports.getElectronics = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const Electronic_js_1 = require("../../models/electronics/Electronic.js");
const user_js_1 = require("../../models/users/user.js");
const mongoose_1 = require("mongoose");
const getElectronics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        //electronics = [...electronics].map((electronic) =>
        // Buffer.from(electronic.thumbnailImage))
        res.status(200).send(electronics);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getElectronics = getElectronics;
const getElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const electronic = yield Electronic_js_1.Electronic.findById(req.params.id);
    if (Electronic_js_1.Electronic) {
        res.status(200).send(electronic);
    }
    res.status(400).json({ success: false, message: "Electronic Not found" });
});
exports.getElectronic = getElectronic;
const createElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, user, category, batteryHealth, screenSize, images, colors, condition, receipt, ownershipDuration, location, thumbnailImage } = req.body;
    const foundedCategory = yield Category_js_1.Category.findById(req.body.category);
    const ownerUser = yield user_js_1.User.findById(req.body.user);
    if (!foundedCategory || !ownerUser)
        return res.status(400).json({ error: "Invalid category or user" });
    try {
        const uploadedImage = req.file;
        //const createdImage = Date.now()  + '-' + uploadedImage.originalname
        let newElectronic = new Electronic_js_1.Electronic({
            name,
            description,
            price,
            user,
            category,
            batteryHealth,
            screenSize,
            images,
            colors,
            condition,
            receipt,
            ownershipDuration,
            location,
            thumbnailImage
        });
        newElectronic = yield newElectronic.save();
        console.log("The new Electronic is here ", newElectronic);
        res.status(201).json({ message: "One Electronic has been created" });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.createElectronic = createElectronic;
const updateElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronic = yield Electronic_js_1.Electronic.findByIdAndUpdate(req.params.id, req.body);
        if (!electronic)
            throw new mongoose_1.Error("Electronic Not found");
        res.status(200).send("Electronic updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateElectronic = updateElectronic;
const deleteElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronic = yield Electronic_js_1.Electronic.findByIdAndDelete(req.params.id);
        if (!electronic)
            throw new mongoose_1.Error("No Electronic found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteElectronic = deleteElectronic;
const searchByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const electronicSearchedByNames = yield Electronic_js_1.Electronic.find({ name });
        if (!electronicSearchedByNames)
            throw new mongoose_1.Error("Name finns inte");
        res.status(200).json(electronicSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchByName = searchByName;
//high price
const searchByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const highPriceElectronics = electronics.filter((electronic) => electronic.price >= 200);
        console.log("Low prices: ", highPriceElectronics);
        res.status(200).json(highPriceElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på Electronics" });
    }
});
exports.searchByHighPrice = searchByHighPrice;
//search by low price
const searchByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const lowPriceElectronics = electronics.filter((electronic) => electronic.price < 200);
        console.log("Low prices: ", lowPriceElectronics);
        res.status(200).json(lowPriceElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
exports.searchByLowPrice = searchByLowPrice;
//new electronics
const getNewElectronics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const newElectronics = electronics.filter((electronic) => electronic.condition === "new");
        res.status(200).json(newElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med newElectronics" });
    }
});
exports.getNewElectronics = getNewElectronics;
const getElectronicsByReciepts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const electronicsWithReciepts = electronics.filter((electronic) => electronic.receipt === "yes");
        res.status(200).json(electronicsWithReciepts);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronic med recipet" });
    }
});
exports.getElectronicsByReciepts = getElectronicsByReciepts;
//screen sizes
const getElectronicsWithLargeScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const electronicsWithLargeScreen = electronics.filter((electronic) => electronic.screenSize === "large");
        res.status(200).json(electronicsWithLargeScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronicsWithLargeScreen" });
    }
});
exports.getElectronicsWithLargeScreen = getElectronicsWithLargeScreen;
const getElectronicsWithMediumScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const electronicsWithMediumScreen = electronics.filter((electronic) => electronic.screenSize === "medium");
        res.status(200).json(electronicsWithMediumScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronicsWithMediumScreen" });
    }
});
exports.getElectronicsWithMediumScreen = getElectronicsWithMediumScreen;
const getElectronicsWithSmallScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic_js_1.Electronic.find();
        const electronicsWithSmallScreen = electronics.filter((electronic) => electronic.screenSize === "small");
        res.status(200).json(electronicsWithSmallScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronics With Small Screen" });
    }
});
exports.getElectronicsWithSmallScreen = getElectronicsWithSmallScreen;
const getElectronicsWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const electronics = yield Electronic_js_1.Electronic.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedElectronics = electronics.slice(offset, offset + pageSize);
        res.status(200).json(paginatedElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med electronics With Small Screen" });
    }
});
exports.getElectronicsWithPagination = getElectronicsWithPagination;
