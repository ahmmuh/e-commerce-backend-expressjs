import express from "express";
import {
  createHobby,
  deleteHobby,
  getHobbies, getHobbiesWithPagination,
  getHobby,
  searchHobbiesByHighPrice,
  searchHobbiesByLowPrice,
  searchHobbiesByName,
  updateHobby
} from "../../controllers/hobbies/hobbyController.js";

const router = express.Router();

router.get("/hobbies", getHobbies);
router.get("/hobbies/:id", getHobby);
router.post("/hobbies", createHobby);
router.put("/hobbies/:id", updateHobby);
router.delete("/hobbies/:id", deleteHobby);

//searching

router.get("/hobbies/search", searchHobbiesByName );
router.get("/hobbies/search/lowprices", searchHobbiesByLowPrice );
router.get("/hobbies/search/highprices", searchHobbiesByHighPrice );



//pagination
router.get("/hobbies/search/pages", getHobbiesWithPagination );


export default router;
