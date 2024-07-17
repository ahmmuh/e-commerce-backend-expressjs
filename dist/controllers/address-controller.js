var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Address } from "../models/Address.js";
import { User } from "../models/users/user.js";
export const getAddressList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addresses = yield Address.find();
        res.status(200).send(addresses);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
export const getAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield Address.findById(req.body.id);
        res.status(200).send(address);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
export const addNewAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { streetName, city, state, postalCode, buildingNumber, user } = req.body;
    /* const addressOwner = await User.findById(req.params.id)
     if (!addressOwner) throw new Error("The owner of this address was not found")*/
    try {
        const newAddress = new Address({
            streetName,
            city,
            state,
            postalCode,
            buildingNumber,
            user
        });
        console.log("NEW Address", newAddress);
        yield newAddress.save();
        res.status(201).json({ message: "One address has been created" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
export const updateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const addressOwner = yield User.findById(req.params.id);
    if (!addressOwner)
        throw new Error("The owner of this address was not found");
    const updatedAddress = yield Address.findByIdAndUpdate(req.params.id, req.body);
    try {
        if (!updatedAddress || !addressOwner)
            throw new Error("Address or the" +
                " ownner not found");
        res.status(200).send(updatedAddress);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
export const deleteAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield User.findByIdAndDelete(req.params.id);
        if (!findUser)
            throw Error("User Not found");
        res.status(200).send(findUser);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
export const getAddressByCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city } = req.query;
    const getCityByName = yield Address.find({ city });
    try {
        if (!getCityByName)
            throw new Error("City not found");
        res.status(200).send(getCityByName);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
