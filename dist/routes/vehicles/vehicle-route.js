"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vehicleController_js_1 = require("../../controllers/vehicles/vehicleController.js");
const router = express_1.default.Router();
router.get("/vehicles", vehicleController_js_1.getVehicles);
router.get("/vehicles/:id", vehicleController_js_1.getVehicle);
router.post("/vehicles", vehicleController_js_1.createVehicle);
router.put("/vehicles/:id", vehicleController_js_1.updateVehicle);
router.delete("/vehicles/:id", vehicleController_js_1.deleteVehicle);
router.get("/vehicles/search/lowprices", vehicleController_js_1.searchVehiclesByName);
router.get("/vehicles/search/highprices", vehicleController_js_1.searchVehiclesByLowPrice);
router.get("/vehicles/search/highprices", vehicleController_js_1.searchVehiclesByHighPrice);
router.get("/vehicles/search/pages", vehicleController_js_1.getVehiclesWithPagination);
exports.default = router;
