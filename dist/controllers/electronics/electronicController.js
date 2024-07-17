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
import { Electronic } from "../../models/electronics/Electronic.js";
import { User } from "../../models/users/user.js";
import { Error } from "mongoose";
export const getElectronics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        res.status(200).send(electronics);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const electronic = yield Electronic.findById(req.params.id);
    if (Electronic) {
        res.status(200).send(electronic);
    }
    res.status(400).json({ success: false, message: "Electronic Not found" });
});
export const createElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, user, category, batteryHealth, screenSize, images, color, condition, receipt, ownershipDuration, location, thumbnailImage } = req.body;
    const foundedCategory = yield Category.findById(req.body.category);
    const ownerUser = yield User.findById(req.body.user);
    if (!foundedCategory || !ownerUser)
        return res.status(400).json({ error: "Invalid category or user" });
    try {
        const uploadedImage = req.file;
        //const createdImage = Date.now()  + '-' + uploadedImage.originalname
        let newElectronic = new Electronic({
            name,
            description,
            price,
            user,
            category,
            batteryHealth,
            screenSize,
            images,
            color,
            condition,
            receipt,
            ownershipDuration,
            location,
            thumbnailImage
        });
        yield newElectronic.save();
        console.log("The new Electronic is here ", newElectronic);
        res.status(201).json({ message: "One Electronic has been created" });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
export const updateElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronic = yield Electronic.findByIdAndUpdate(req.params.id, req.body);
        if (!electronic)
            throw new Error("Electronic Not found");
        res.status(200).send("Electronic updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteElectronic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronic = yield Electronic.findByIdAndDelete(req.params.id);
        if (!electronic)
            throw new Error("No Electronic found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
export const searchByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const electronicSearchedByNames = yield Electronic.find({ name });
        if (!electronicSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(electronicSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const highPriceElectronics = electronics.filter((electronic) => electronic.price >= 200);
        console.log("Low prices: ", highPriceElectronics);
        res.status(200).json(highPriceElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på Electronics" });
    }
});
//search by low price
export const searchByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const lowPriceElectronics = electronics.filter((electronic) => electronic.price <= 200);
        console.log("Low prices: ", lowPriceElectronics);
        res.status(200).json(lowPriceElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
//new electronics
export const getNewElectronics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const newElectronics = electronics.filter((electronic) => electronic.condition === "new");
        res.status(200).json(newElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med newElectronics" });
    }
});
export const getElectronicsByReciepts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const electronicsWithReciepts = electronics.filter((electronic) => electronic.receipt === "yes");
        res.status(200).json(electronicsWithReciepts);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronic med recipet" });
    }
});
//screen sizes
export const getElectronicsWithLargeScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const electronicsWithLargeScreen = electronics.filter((electronic) => electronic.screenSize === "large");
        res.status(200).json(electronicsWithLargeScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronicsWithLargeScreen" });
    }
});
export const getElectronicsWithMediumScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const electronicsWithMediumScreen = electronics.filter((electronic) => electronic.screenSize === "medium");
        res.status(200).json(electronicsWithMediumScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronicsWithMediumScreen" });
    }
});
export const getElectronicsWithSmallScreen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const electronics = yield Electronic.find();
        const electronicsWithSmallScreen = electronics.filter((electronic) => electronic.screenSize === "small");
        res.status(200).json(electronicsWithSmallScreen);
    }
    catch (e) {
        res.status(500).json({ message: "Fel electronics With Small Screen" });
    }
});
export const getElectronicsWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const electronics = yield Electronic.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedElectronics = electronics.slice(offset, offset + pageSize);
        res.status(200).json(paginatedElectronics);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med electronics With Small Screen" });
    }
});
