import mongoose from "mongoose";
require("./User");

const schema = new mongoose.Schema(
  {
    type: {
        required:true,
        type: String,
      },
    codeOffer: {
      required: false,
      type: String,
    },
    codeProduct: {
      required: false,
      type: String,
    },
    percent: {
      required: true,
      type: Number,
    },
    maxUse: {
      required: false,
      type: Number,
    },
    time: {
      required: false,
      type: Number,
    },
    uses: {
      required: false,
      type: Number,
    },
    user: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const discountModel =
  mongoose.models.Discount || mongoose.model("Discount", schema);

export default discountModel;
