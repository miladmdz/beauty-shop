import mongoose from "mongoose";
require("./Comment");
require("./User");

const schema = new mongoose.Schema(
  {
    nameFa: {
      required: true,
      type: String,
    },
    nameEn: {
      required: true,
      type: String,
    },
    brand: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    percent: {
      type: Number,
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    timer: {
      type: Number,
      required: false,
    },
    shortDesc: {
      required: true,
      type: String,
    },
    longDesc: {
      required: true,
      type: String,
    },
    Compounds: {
      required: true,
      type: [String],
    },
    howToUse: {
      required: true,
      type: String,
    },
    weight: {
      required: true,
      type: String,
    },
    countery: {
      required: true,
      type: String,
    },
    box: {
      required: true,
      type: String,
    },
    expOpen: {
      required: true,
      type: String,
    },
    expCompany: {
      required: true,
      type: String,
    },
    specific: {
      required: true,
      type: [String],
    },
    smell: {
      required: true,
      type: String,
    },
    department: {
      required: true,
      type: String,
    },
    subDepartment: {
      required: true,
      type: [String],
    },
    color: {
      required: true,
      type: [],
      default: [],
    },
    img: {
      required: true,
      type: String,
    },
    rate: {
      required: true,
      type: Number,
    },
    sales: {
      type: Number,
      required: true,
      default: 0,
    },
    likes: {
      required: true,
      type: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    },
    comments: {
      required: false,
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const productsModel =
  mongoose.models.Product || mongoose.model("Product", schema);
export default productsModel;
