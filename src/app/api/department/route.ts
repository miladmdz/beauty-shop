import connectToDB from "@/configs/db";
import departmentTicketModel from "@/model/Departmentticket";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;

    if (title.trim().length < 1) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }

    await departmentTicketModel.create({ title });

    return Response.json(
      { message: "youre department created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    connectToDB();
    const departments = await departmentTicketModel.find();
    return Response.json(departments);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
