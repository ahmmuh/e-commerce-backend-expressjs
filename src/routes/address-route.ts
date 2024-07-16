import express from "express";
import {
  addNewAddress, deleteAddress, getAddress, getAddressByCity,
  getAddressList, updateAddress
} from "../controllers/address-controller";


const router = express.Router();




router.get("/addresses", getAddressList)
router.get("/addresses/:id", getAddress)
router.get("/addresses/city", getAddressByCity)
router.put("/addresses/:id", updateAddress)
router.delete("/addresses/:id", deleteAddress)

export default router;