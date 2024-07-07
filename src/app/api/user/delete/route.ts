import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();

    const { id } = body;

    //validation
    if (!isValidObjectId(id)) {
      return Response.json(
        { message: "youre data is not valid !!" },
        { status: 422 }
      );
    }

    await userModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "delete user successfully :)) " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
