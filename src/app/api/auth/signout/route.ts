import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    cookies().delete("token");
    return Response.json(
      { message: "logged out successfully :)) " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { message: `error from server is ${error}` },
      { status: 500 }
    );
  }
}
