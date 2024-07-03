import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import { verifyToken } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    connectToDB();

    let user = null;
    const token = cookies().get("token");

    if (token) {
      const tokenPayload = verifyToken(token?.value);
      if (typeof tokenPayload === "object") {
        user = await userModel.findOne(
          { email: tokenPayload.email },
          "-password -__v -refreshToken"
        );
        return Response.json(user);
      } else {
        return Response.json(
          { data: null, message: "not access !!" },
          { status: 401 }
        );
      }
    } else {
      return Response.json(
        { data: null, message: "not access !!" },
        { status: 401 }
      );
    }
  } catch (error) {
    return Response.json(
      { message: `error server is : ${error}` },
      { status: 500 }
    );
  }
}
