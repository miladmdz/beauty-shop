import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import { generateToken, validEmail, verifyPassword } from "@/utils/auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, password } = body;

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

    const isCorrectPassword =await verifyPassword(password, findUser.password);

    if (!isCorrectPassword) {
      return Response.json(
        { message: "youre password or email is not correct !!" },
        { status: 401 }
      );
    }

    const accessToken = generateToken({ email });

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);

    return Response.json(
      { message: "youre login is successfully :))" },
      { status: 201, headers }
    );
  } catch (error) {
    return Response.json(
      { message: `error form server ${error}` },
      { status: 500 }
    );
  }
}
