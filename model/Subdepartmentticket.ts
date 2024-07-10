import mongoose from "mongoose";
require("./Departmentticket");

const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  department: {
    type: mongoose.Types.ObjectId,
    ref: "Departmentticket",
    required: true,
  },
});

const subDepartmentTicketModel =
  mongoose.models.Subdepartmentticket ||
  mongoose.model("Subdepartmentticket", schema);

  export default subDepartmentTicketModel
