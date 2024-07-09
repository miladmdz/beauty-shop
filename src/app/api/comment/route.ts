import connectToDB from "@/configs/db";
import commentModel from "@/model/Comment";
import productsModel from "@/model/Product";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const body = await req.json();

    const { text, score,username, auther, product } = body;

    //validation

    if (!isValidObjectId(product)) {
      return Response.json(
        { message: "youre data is not valid" },
        { status: 422 }
      );
    }

    const comment = await commentModel.create({
      text,
      score,
      auther,
      product,
      username,
      isAccept: false,
    });

    const updateProducts = await productsModel.findByIdAndUpdate(
      { _id: product },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    if (!comment) {
      return Response.json(
        { message: "error from submit youre data" },
        { status: 421 }
      );
    }

    return Response.json(
      { message: "youre comment created successfully :)) " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
