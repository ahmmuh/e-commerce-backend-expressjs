import mongoos from "mongoose";
const Schema = mongoos.Schema;

const userSchema = new Schema({
  id: String,
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  cars: [{ type: String, ref: "Car"}],
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    // required: true
  },

  phoneNumber: {
    type: Number,
    default: 0,
    required: true,
  },
  birthDay: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoos.model("user", userSchema);
