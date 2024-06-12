import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Detailes from "@/components/templates/RulesAndOrder/detailes";
import Road from "@/components/templates/RulesAndOrder/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"راهنمای سفارش"} />
      <Detailes />
      <Footer />
    </div>
  );
}

export default page;
