import { validationResult } from "express-validator";

import { Request, Response } from 'express';
export const validationAction = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errors.array().forEach((err) => {
      if (err.type !== "unknown_fields") {
        console.log("Fel------", { message: err.msg });
      }
    });
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
