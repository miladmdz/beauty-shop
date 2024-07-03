import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import { verifyToken } from "./auth";
import userModel from "@/model/User";

const authUser = async () => {
  await connectToDB();
  const token = cookies().get("token");
  let user = null;
  if (token) {
    const tokenPayload = verifyToken(token?.value);
    if (tokenPayload) {
      if (typeof tokenPayload === "object") {
        user = await userModel.findOne({ email: tokenPayload.email });
      }
    }
  }
  return user;
};
const authAdmin = async () => {
  await connectToDB();
  let user = null;
  const token = cookies().get("token");
  if (token) {
    const tokenPayload = verifyToken(token?.value);
    if (tokenPayload) {
      if (typeof tokenPayload === "object") {
        user = userModel.findOne({ email: tokenPayload.email });
        if (user.role === "ADMIN") {
          return user;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
  return user;
};
export { authAdmin, authUser };
