require("./User");
require("./Product");
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    text: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    auther: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    score:{
      required: true,
      type: Number,
    },
    isAccept: {
      required: true,
      type: Boolean,
    },
    product: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);
const commentModel =
  mongoose.models.Comment || mongoose.model("Comment", schema);
export default commentModel;