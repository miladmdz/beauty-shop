import connectToDB from "@/configs/db";
import subDepartmentModel from "@/model/subdepartmentcategories";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();

    const { title, departmentCategories } = body;

    const subDepartment = await subDepartmentModel.create({
      title,
      departmentCategories,
    });
    if (subDepartment) {
      return Response.json(
        { message: "youre subdepartment created successfully " },
        { status: 201 }
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
