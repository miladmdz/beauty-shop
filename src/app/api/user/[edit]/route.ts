import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    try {
        return Response.json({message:"welcom to our api "})
    } catch (error) {
        return Response.json({messgae:error},{status:500})
    }
}