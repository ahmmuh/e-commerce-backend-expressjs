import express from "express";
import {
  createVehicle,
  deleteVehicle,
  getVehicle,
  getVehicles, getVehiclesWithPagination,
  searchVehiclesByHighPrice,
  searchVehiclesByLowPrice,
  searchVehiclesByName,
  updateVehicle
} from "../../controllers/vehicles/vehicleController.js";

const router = express.Router();

router.get("/vehicles", getVehicles);
router.get("/vehicles/:id", getVehicle);
router.post("/vehicles", createVehicle);
router.put("/vehicles/:id", updateVehicle);
router.delete("/vehicles/:id", deleteVehicle);

router.get("/vehicles/search/lowprices", searchVehiclesByName );
router.get("/vehicles/search/highprices", searchVehiclesByLowPrice );
router.get("/vehicles/search/highprices", searchVehiclesByHighPrice );

router.get("/vehicles/search/pages", getVehiclesWithPagination );

export default router;
