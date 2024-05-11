import mongoose from "mongoose";

const UserProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export const UserProduct = mongoose.model("UserProduct", UserProductSchema);
