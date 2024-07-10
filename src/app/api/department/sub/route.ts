import connectToDB from "@/configs/db";
import subDepartmentTicketModel from "@/model/Subdepartmentticket";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { title, department } = body;

    if (!isValidObjectId(department)) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }

    await subDepartmentTicketModel.create({
      title,
      department,
    });

    return Response.json(
      { message: "youre subDepartment created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
