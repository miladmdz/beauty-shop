import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
});

const departmentTicketModel =
  mongoose.models.Department || mongoose.model("Department", schema);

export default departmentTicketModel;
