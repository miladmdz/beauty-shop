import mongoose from "mongoose";

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
      type: Number,
    },
    specific: {
      required: true,
      type: [String],
    },
    smell: {
      required: true,
      type: String,
    },
    tags: {
      required: true,
      type: [String],
    },
    color: {
      required: true,
      type: [String],
    },
    img: {
      required: true,
      type: String,
    },
    rate: {
      required: true,
      type: Number,
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
