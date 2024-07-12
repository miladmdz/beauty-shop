import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
});

const departmentTicketModel =
  mongoose.models.Departmentticket || mongoose.model("Departmentticket", schema);

export default departmentTicketModel;
