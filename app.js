import express from "express";
import userRoute from "./routes/users/route.users.js";
import vehicleRouter from "./routes/vehicles/vehicle-route.js";
import categoryRoute from "./routes/categories/category-route.js";
import { getConnection } from "./controllers/users/dbConnection/dbConnection.js";
import bodyParser from "body-parser";
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api", userRoute);
app.use("/api", vehicleRouter);

app.use("/api", categoryRoute);

app.listen(PORT, () => {
  getConnection();
  console.log(`The server has been started on ${PORT}`);
});
