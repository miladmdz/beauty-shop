import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Basket from "@/components/templates/Shop/Cart/basket";
import CalculateComp from "@/components/templates/Shop/Cart/calculateComp";
import Road from "@/components/templates/Shop/Cart/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route="سبد خرید" />
      <div className="container flex flex-col xl:flex-row items-start justify-between">
        <Basket route="سبد خرید" />
        <CalculateComp />
      </div>
      <Footer />
    </div>
  );
}

export default page;
