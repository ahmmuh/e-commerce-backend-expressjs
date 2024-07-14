import { validationResult } from "express-validator";


export  const validationAction = (req, res, next) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    Array.from(errors).map((err) => {
      console.log("Fel------", {message: err.msg, path: err.path})

    })
    return res.status(400).json({errors: errors.array()})
  }
  next()
}