import connectToDB from "@/configs/db";
import commentModel from "@/model/Comment";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;

    if (!isValidObjectId(id)) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }

    await commentModel.findOneAndDelete({ _id: id });

    return Response.json(
      { message: "youre comment is deleted " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
