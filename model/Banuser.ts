import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const userBanModel =
  mongoose.models.Banuser || mongoose.model("Banuser", schema);
export default userBanModel;
