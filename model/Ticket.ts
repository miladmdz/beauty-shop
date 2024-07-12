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
      ref: "Ticket",
    },
    mainTicket: {
      required: false,
      type: mongoose.Types.ObjectId,
      ref: "Subdepartmentticket",
    },
    priority: {
      required: true,
      type: Number,
    },
    hasAnswer: {
      required: false,
      type: Boolean,
      default: false,
    },
    isAnswer: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ticketModel = mongoose.models.Ticket || mongoose.model("Ticket", schema);
export default ticketModel;
