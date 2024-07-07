import connectToDB from "@/configs/db";
import userBanModel from "@/model/Banuser";
import { validEmail, validPhoneNumbre } from "@/utils/auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();

    const { email, phone } = body;

    //validation

    const emailValid = validEmail(email);
    const phoneValid = validPhoneNumbre(phone);

    if (!emailValid || !phoneValid) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }

    await userBanModel.create({ email, phone });

    return Response.json(
      { message: "delete user successfully :)) " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
