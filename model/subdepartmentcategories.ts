import mongoose from "mongoose";
require("./departmentcategories")

const schema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    departmentCategories: {
      required: true,
      ref: "Departmentcategories",
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
const subDepartmentModel =
  mongoose.models.Subdepartmentcategories ||
  mongoose.model("Subdepartmentcategories", schema);
export default subDepartmentModel;
