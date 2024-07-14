"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_users_js_1 = __importDefault(require("./routes/users/route.users.js"));
const vehicle_route_js_1 = __importDefault(require("./routes/vehicles/vehicle-route.js"));
const category_route_js_1 = __importDefault(require("./routes/categories/category-route.js"));
const hobby_route_js_1 = __importDefault(require("./routes/hobbies/hobby-route.js"));
const house_route_js_1 = __importDefault(require("./routes/houses/house-route.js"));
const cloth_route_js_1 = __importDefault(require("./routes/clothes/cloth-route.js"));
const electronic_route_js_1 = __importDefault(require("./routes/electronics/electronic-route.js"));
const furniture_route_js_1 = __importDefault(require("./routes/furniture/furniture-route.js"));
const dbConnection_js_1 = require("./database/dbConnection/dbConnection.js");
const book_route_js_1 = __importDefault(require("./routes/hobbies/book-route.js"));
const boat_route_js_1 = __importDefault(require("./routes/hobbies/boat-route.js"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const corsOptions = {
    origin: "http://localhost:3000/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//routes
app.use("/api", route_users_js_1.default);
app.use("/api", hobby_route_js_1.default);
app.use("/api", vehicle_route_js_1.default);
app.use("/api", category_route_js_1.default);
app.use("/api", house_route_js_1.default);
app.use("/api", furniture_route_js_1.default);
app.use("/api", electronic_route_js_1.default);
app.use("/api", cloth_route_js_1.default);
app.use("/api", book_route_js_1.default);
app.use("/api", boat_route_js_1.default);
app.listen(PORT, () => {
    (0, dbConnection_js_1.getConnection)();
    console.log(`The server has been started on ${PORT}`);
});
