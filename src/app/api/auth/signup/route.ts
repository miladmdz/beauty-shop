import { NextRequest } from "next/server";
import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import {
  generateToken,
  hashPassword,
  validEmail,
  validFirstAndLastname,
  validPassword,
  validPhoneNumbre,
} from "@/utils/auth";

export async function POST(req: NextRequest) {
  try {
    connectToDB();

    const body = await req.json();
    const {
      firstName,
      lastName,
      gender,
      year,
      month,
      day,
      phone,
      email,
      password,
    } = body;

    // validation

    if (
      !validPassword(password) &&
      !validFirstAndLastname(lastName) &&
      !validFirstAndLastname(firstName) &&
      !validPhoneNumbre(phone) &&
      !validEmail(email)
    ) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 402 }
      );
    }

    const usersDuplicate = await userModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (usersDuplicate) {
      return Response.json(
        { message: "The username or email or phone exist already !!" },
        { status: 422 }
      );
    }

    const hashedPass = await hashPassword(password);

    const accessToken = generateToken({ email });

    const users = await userModel.find({});

    await userModel.create({
      firstName,
      lastName,
      gender,
      year,
      month,
      day,
      phone,
      email,
      password: hashedPass,
      role: users.length > 0 ? "USER" : "ADMIN",
    });
    return Response.json(
      { message: "user created successfully :))" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

