import connectToDB from "@/configs/db";
import ticketModel from "@/model/Ticket";
import { writeFileSync } from "fs";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const body = formData.get("body");
    const user = formData.get("user");
    const department = formData.get("department");
    const subDepartment = formData.get("subDepartment");
    const priority = formData.get("priority");
    const img = formData.get("img") as File;

    //validation

    if (
      !(title as string).trim().length ||
      !(body as string).trim().length ||
      !isValidObjectId(user) ||
      !isValidObjectId(department) ||
      !isValidObjectId(subDepartment)
    ) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }
    
    if (img) {
      let buffer = Buffer.from(await (img as File).arrayBuffer());
      let fileName = Date.now() + (img as File).name;
      let imgPath = path.join(process.cwd(), "public/uploads/", fileName);

      writeFileSync(imgPath, buffer);

      const ticket = await ticketModel.create({
        title,
        body,
        user,
        department,
        subDepartment,
        priority,
        hasAnswer: false,
        isAnswer: false,
        img: `http://localhost:3000/uploads/${fileName}`,
      });
    }else{
        const ticket = await ticketModel.create({
            title,
            body,
            user,
            department,
            subDepartment,
            priority,
            hasAnswer: false,
            isAnswer: false,
          });
    }

    return Response.json(
      { message: "youre ticket created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
