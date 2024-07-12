import connectToDB from "@/configs/db";
import discountModel from "@/model/Discount";
import { authUser } from "@/utils/serverHelper";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { codeOffer, codeProduct, percent, maxUse, time } = body;

    //special sell

    if (time && codeProduct) {
      await discountModel.create({
        type: "special-sell",
        codeProduct,
        percent,
        time,
        user: user._id,
      });
    }

    //offer

    if (codeProduct && !time) {
      await discountModel.create({
        type: "offer",
        codeProduct,
        percent,
        user: user._id,
      });
    }

    //code offer

    if (codeOffer && maxUse) {
      await discountModel.create({
        type: "code-offer",
        codeOffer,
        percent,
        maxUse,
        uses: 0,
        user: user._id,
      });
    }

    return Response.json(
      { message: "youre discount created successfully " },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
