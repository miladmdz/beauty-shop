require("./User");
require("./Product");
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    text: {
      required: true,
      type: String,
    },
    auther: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    products: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
  },
  {
    timestamps: true,
  }
);
const commentModel =
  mongoose.models.Comment || mongoose.model("Comment", schema);
export default commentModel;