import express from "express";
import {
  addNewAddress, deleteAddress, getAddress, getAddressByCity,
  getAddressList, updateAddress
} from "../api/address-controller";
import { addressValidationRules } from "../validations/address-validator.js";
import { validationAction } from "../validations/validationAction.js";


const router = express.Router();




router.get("/addresses", getAddressList)
router.get("/addresses/:id", getAddress)
router.get("/addresses/city", getAddressByCity)
router.post("/addresses",addressValidationRules,
  validationAction ,addNewAddress)

router.put("/addresses/:id", addressValidationRules,validationAction ,updateAddress)
router.delete("/addresses/:id", deleteAddress)

export default router;