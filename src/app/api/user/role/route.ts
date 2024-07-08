import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import { role } from "@/utils/constant";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();

    const { id } = body;


    if (!isValidObjectId(id)) {
      return Response.json(
        { message: "youre data is not valid !!" },
        { status: 422 }
      );
    }

    const user = await userModel.findOne({ _id: id }).lean();
    await userModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          role: user.role === role.ADMIN ? role.USER : role.ADMIN,
        },
      }
    );

    return Response.json(
      { message: "youre change role is successfully :)) " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
