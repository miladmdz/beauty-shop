import connectToDB from "@/configs/db";
import ticketModel from "@/model/Ticket";
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
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }
    const result = await ticketModel.find({ mainTicket: id });

    if (!result.length) {
      return Response.json(
        { message: "youre ticket not have answer" },
        { status: 421 }
      );
    }

    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
