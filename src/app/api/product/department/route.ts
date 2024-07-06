import connectToDB from "@/configs/db";
import departmentModel from "@/model/departmentcategories";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;
    const department = await departmentModel.create({
      title,
    });
    if (department) {
      return Response.json(
        { message: "youre department created successfully" },
        {
          status: 201,
        }
      );
    } else {
      return Response.json(
        { message: "error for youre data" },
        { status: 422 }
      );
    }
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const departments = await departmentModel.find({}, "title");
    return Response.json(departments);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
