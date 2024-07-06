import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const departmentModel =
  mongoose.models.Departmentcategories ||
  mongoose.model("Departmentcategories", schema);
export default departmentModel;
