import { NextRequest } from "next/server";
import userModel from "@/model/User";
import connectToDB from "@/configs/db";
import {
  generateToken,
  validEmail,
  validPassword,
  verifyPassword,
} from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { email } = body;

    const isValidEmail = validEmail(email);

    if (!isValidEmail) {
      return Response.json(
        { message: "email or phone is not valid" },
        { status: 422 }
      );
    }

    const findUser = await userModel.findOne({ email });

    if (!findUser) {
      return Response.json({ message: "user not found !!" }, { status: 424 });
    }

    return Response.json(
      { message: "youre email is correct :))" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: `error from server is ${error}` },
      { status: 500 }
    );
  }
}
