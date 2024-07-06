import connectToDB from "@/configs/db";
import subDepartmentModel from "@/model/subdepartmentcategories";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "ID is not valid!!" }, { status: 422 });
    }
    const subDepartments = await subDepartmentModel.find(
      { departmentCategories: id },
      "title departmentCategories"
    );
    return Response.json(subDepartments);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
