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
exports.searchUsersByName = exports.getUsersWithPagination = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.countUsers = exports.getUsers = void 0;
const user_js_1 = require("../../models/users/user.js");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_js_1.User.find();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getUsers = getUsers;
const countUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countedDocument = yield user_js_1.User.find().toArray().countDocuments();
        res.status(200).send(countedDocument);
    }
    catch (error) {
        res.status(500).json({ success: false });
    }
});
exports.countUsers = countUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_js_1.User.findById(req.params.id);
    if (user) {
        res.status(200).send(user);
    }
    res.status(400).json({ success: false, message: "User Not found" });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, phoneNumber, birthDay } = req.body;
    try {
        const newUser = new user_js_1.User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            birthDay,
        });
        const user = yield newUser.save();
        res.status(201).send({ user: user, message: "One user has been created" });
    }
    catch (error) {
        console.error("Error creating user");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_js_1.User.findByIdAndUpdate(req.params.id, req.body);
        if (!user)
            throw Error("Not found");
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_js_1.User.findByIdAndDelete(req.params.id);
        if (!user)
            throw Error("No user found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteUser = deleteUser;
const getUsersWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const users = yield user_js_1.User.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedUsers = users.slice(offset, offset + pageSize);
        res.status(200).json(paginatedUsers);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated users" });
    }
});
exports.getUsersWithPagination = getUsersWithPagination;
const searchUsersByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const usersSearchedByNames = yield user_js_1.User.find({ name });
        if (!usersSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(usersSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.searchUsersByName = searchUsersByName;
