import express from "express";
import cors from "cors";
import userRoute from "./routes/users/route.users.js";
import vehicleRouter from "./routes/vehicles/vehicle-route.js";
import categoryRoute from "./routes/categories/category-route.js";
import hobbyRoute from "./routes/hobbies/hobby-route.js";
import houseRoute from "./routes/houses/house-route.js";
import clothRoute from "./routes/clothes/cloth-route.js";
import electronicRoute from "./routes/electronics/electronic-route.js";
import furnitureRouet from "./routes/furniture/furniture-route.js";
import { getConnection } from "./controllers/users/dbConnection/dbConnection.js";

import bodyParser from "body-parser";
const PORT = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//routes
app.use("/api", userRoute);
app.use("/api", hobbyRoute);
app.use("/api", vehicleRouter);
app.use("/api", categoryRoute);
app.use("/api", houseRoute);
app.use("/api", furnitureRouet);
app.use("/api", electronicRoute);
app.use("/api", clothRoute);

app.listen(PORT, () => {
  getConnection();
  console.log(`The server has been started on ${PORT}`);
});
