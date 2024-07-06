import connectToDB from "@/configs/db";
import productsModel from "@/model/Product";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();
    const { ID } = body;

    // validations
    if (!isValidObjectId(ID)) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }
    console.log(isValidObjectId(ID));

    const product = await productsModel.findOneAndDelete({ _id: ID });

    if (product) {
      return Response.json(
        { message: "youre product deleted successfully :)) " },
        { status: 201 }
      );
    } else {
      return Response.json(
        { message: "youre product not found " },
        { status: 402 }
      );
    }
  } catch (error) {
    Response.json({ message: error }, { status: 500 });
  }
}
