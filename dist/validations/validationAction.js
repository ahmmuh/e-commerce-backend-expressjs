"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationAction = void 0;
const express_validator_1 = require("express-validator");
const validationAction = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        Array.from(errors).map((err) => {
            console.log("Fel------", { message: err.msg, path: err.path });
        });
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validationAction = validationAction;
