import connectToDB from "@/configs/db";
import productsModel from "@/model/Product";
import { writeFileSync } from "fs";
import { NextRequest } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const formData = await req.formData();

    const nameFa = formData.get("nameFa");
    const nameEn = formData.get("nameEn");
    const brand = formData.get("brand");
    const price = formData.get("price");
    const shortDesc = formData.get("shortDesc");
    const longDesc = formData.get("longDesc");
    const Compounds = (formData.get("Compounds") as string).split(",");
    const howToUse = formData.get("howToUse");
    const weight = formData.get("weight");
    const specific = (formData.get("specific") as string).split(",");
    const smell = formData.get("smell");
    const department = formData.get("department");
    const subDepartment = (formData.get("subDepartment") as string).split(",")
    const color = (formData.get("color") as string).split(",");
    const color2 = formData.get("color") 
    const img = formData.get("img");

    let buffer = Buffer.from(await (img as File).arrayBuffer());
    let fileName = Date.now() + (img as File).name;
    let imgPath = path.join(process.cwd(), "public/uploads/", fileName);

    writeFileSync(imgPath, buffer);

    //validation

    const product = await productsModel.create({
      nameFa,
      nameEn,
      brand,
      price: Number(price),
      shortDesc,
      longDesc,
      Compounds,
      howToUse,
      weight,
      specific,
      smell,
      department,
      subDepartment,
      color,
      img: `http://localhost:3000/uploads/${fileName}`,
      rate: 5,
      likes:[],
      comments: [],
    });
    return Response.json(
      { message: "youre product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { messgae: `error from server is :${error}` },
      { status: 500 }
    );
  }
}
