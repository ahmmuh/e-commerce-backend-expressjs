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
export const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category.find();
        res.status(200).send(categories);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield Category.findById(req.params.id);
    if (category) {
        res.status(200).send(category);
    }
    res.status(400).json({ success: false, message: "Category Not found" });
});
export const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, icon, color } = req.body;
    try {
        const category = new Category({
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
export const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category.findByIdAndUpdate(req.params.id, req.body);
        if (!category)
            throw Error("category Not found");
        console.log("Started from controll");
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category.findByIdAndDelete(req.params.id);
        if (!category)
            throw Error("No category found");
        res.json({ success: true });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
