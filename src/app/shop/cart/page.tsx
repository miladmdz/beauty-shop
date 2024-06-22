import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Basket from "@/components/templates/Shop/Cart/basket";
import CalculateComp from "@/components/templates/Shop/Cart/calculateComp";
import Road from "@/components/templates/Shop/Cart/road";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route="سبد خرید" />
      {/* empty */}
      {/* <div className="w-full h-[80vh] flex flex-col items-center justify-center gap-y-3 pb-20 xs:pb-10">
        <img className="down_anime" src="../images/etc/Capture3.jpg" alt="" />
        <h2 className="text-3xl font-bold">سبد خرید شما خالی است!</h2>
        <p className="w-full text-center">
          می توانید برای مشاهده محصولات به صفحات زیر بروید
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-4 xs:gap-y-0 gap-x-5">
          <Link
            className="w-40 xs:w-60 text-center py-3 bg-primryGreen text-white rounded-md"
            href={"/"}
          >
            محصولات تخفیف دار
          </Link>
          <Link
            className="w-40 xs:w-60 text-center py-3 bg-primryGreen text-white rounded-md"
            href={"/"}
          >
            پرفروش ترین ها
          </Link>
        </div>
      </div> */}
      <div className="container flex flex-col xl:flex-row items-start justify-between">
        <Basket route="سبد خرید" />
        <CalculateComp />
      </div>
      <Footer />
    </div>
  );
}

export default page;
