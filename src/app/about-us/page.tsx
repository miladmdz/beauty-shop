import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/AboutUs/details";
import Road from "@/components/templates/AboutUs/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"درباره ما"} />
      <Details />
      <Footer />
    </div>
  );
}

export default page;
