"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const getConnection = () => {
    const dbURL = "mongodb+srv://ahmmuh:Quuquule1234,,@cluster0.do469pc.mongodb.net/businessDb?retryWrites=true&w=majority&appName=Cluster0";
    mongoose_1.default.connect(dbURL)
        .then(() => console.log("Connected to the Database"))
        .catch((err) => console.log("Failed to connect to database ", err));
};
exports.getConnection = getConnection;
