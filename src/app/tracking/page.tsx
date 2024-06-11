import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/Tracking/details";
import Road from "@/components/templates/Tracking/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"پیگیری سفارش"} />
      <Details />
      <Footer />
    </div>
  );
}

export default page;
