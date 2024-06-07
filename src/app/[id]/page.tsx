import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Products from "@/components/templates/Latest/products";
import Road from "@/components/templates/Latest/road";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <Road route={"جدیدترین ها"}/>
      <Products/>
      <Footer />
    </>
  );
}

export default page;
