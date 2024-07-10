import connectToDB from "@/configs/db";
import subDepartmentTicketModel from "@/model/Subdepartmentticket";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { id } = body;
    
    //validation

    if (!isValidObjectId(id)) {
      return Response.json({ message: "ID is not valid!!" }, { status: 422 });
    }
    
    const subDepartments = await subDepartmentTicketModel.find({
      department: id,
    });
    
    return Response.json(subDepartments);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
