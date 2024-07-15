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
import { Hobby } from "../../models/hobbies/Hobby.js";
import { User } from "../../models/users/user.js";
export const getHobbies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby.find();
        res.status(200).send(hobbies);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hobby = yield Hobby.findById(req.params.id);
    if (hobby) {
        res.status(200).send(hobby);
    }
    res.status(400).json({ success: false, message: "Hobby Not found" });
});
export const createHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, images, price, user, location, category } = req.body;
        const foundedCategory = yield Category.findById(req.body.category);
        const ownerUser = yield User.findById(req.body.user);
        if (!foundedCategory || ownerUser)
            return res.status(400).json({ error: "Invalid category or user" });
        const newHobby = new Hobby({
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
export const updateHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby.findByIdAndUpdate(req.params.id, req.body);
        if (!hobby)
            throw Error("Hobby Not found");
        res.status(200).send("Sno updated");
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteHobby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobby = yield Hobby.findByIdAndDelete(req.params.id);
        if (!hobby)
            throw Error("No Hobby found");
        res.status(200).send("hobby deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
// extra functions
export const getHobbiesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const hobbies = yield Hobby.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedHobbies = hobbies.slice(offset, offset + pageSize);
        res.status(200).json(paginatedHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated hobbies" });
    }
});
export const searchHobbiesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const hobbiesSearchedByNames = yield Hobby.find({ name });
        if (!hobbiesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(hobbiesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchHobbiesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby.find();
        const highPriceHobbies = hobbies.filter((hobby) => hobby.price >= 200);
        console.log("Low prices: ", highPriceHobbies);
        res.status(200).json(highPriceHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på hobbies" });
    }
});
//search by low price
export const searchHobbiesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hobbies = yield Hobby.find();
        const lowPriceHobbies = hobbies.filter((hobby) => hobby.price < 200);
        console.log("Low prices: ", lowPriceHobbies);
        res.status(200).json(lowPriceHobbies);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
