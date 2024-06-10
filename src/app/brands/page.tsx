import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/Brands/details";
import Road from "@/components/templates/Brands/road";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <Road route={"برندها"} />
      <Details />
      <Footer />
    </>
  );
}

export default page;
