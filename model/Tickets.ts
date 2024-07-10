import mongoose from "mongoose";
require("./User");
require("./Departmentticket");
require("./Subdepartmentticket");

const schema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
    img: {
      required: false,
      type: String,
      default: "",
    },
    user: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    department: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Departmentticket",
    },
    subDepartment: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Subdepartmentticket",
    },
    priority: {
      required: true,
      type: Number,
    },
    hasAnswer: {
      required: true,
      type: Boolean,
      default: false,
    },
    isAnswer: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
