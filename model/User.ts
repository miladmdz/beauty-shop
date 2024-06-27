import { timeStamp } from "console";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    gender: {
      required: true,
      type: String,
    },
    year: {
      required: true,
      type: Number,
    },
    month: {
      required: true,
      type: Number,
    },
    day: {
      required: true,
      type: Number,
    },
    phone: {
      required: true,
      type: Number,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models?.User || mongoose.model("User", schema);

export default userModel;
