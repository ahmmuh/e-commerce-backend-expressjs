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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const Category_js_1 = require("../../category_subcategory/model/Category.js");
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_js_1.Category.find();
        res.status(200).send(categories);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
exports.getCategories = getCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Category_js_1.Category.findById(req.params.id);
    if (category) {
        res.status(200).send(category);
    }
    res.status(400).json({ success: false, message: "Category Not found" });
});
exports.getCategory = getCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, icon, color } = req.body;
    try {
        const category = new Category_js_1.Category({
            name,
            icon,
            color,
        });
        yield category.save();
        console.log("New category ", category);
        res
            .status(201)
            .json({ category: category, message: "One category has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createCategory = createCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category_js_1.Category.findByIdAndUpdate(req.params.id, req.body);
        if (!category)
            throw Error("category Not found");
        console.log("Started from controll");
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category_js_1.Category.findByIdAndDelete(req.params.id);
        if (!category)
            throw Error("No category found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.deleteCategory = deleteCategory;
