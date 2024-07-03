import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  cookies().delete("token");
  return Response.json({ message: "logged out successfully :)) " });
}
