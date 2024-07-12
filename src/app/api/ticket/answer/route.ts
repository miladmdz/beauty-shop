import connectToDB from "@/configs/db";
import ticketModel from "@/model/Ticket";
import { authUser } from "@/utils/serverHelper";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();

    const bodyReq = await req.json();

    const userAuth = await authUser();

    const { title, body, department, subDepartment, priority, ticketID } =
      bodyReq;

    await ticketModel.findOneAndUpdate(
      { _id: ticketID },
      { $set: { hasAnswer: true } }
    );

    await ticketModel.create({
      title,
      body,
      user: userAuth._id,
      department,
      subDepartment,
      priority,
      hasAnswer: false,
      isAnswer: true,
      mainTicket: ticketID,
    });

    return Response.json(
      { message: "youre answer is send successfully " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
