import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/ContactUs/details";
import Road from "@/components/templates/ContactUs/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"تماس با ما"} />
      <Details />
      <Footer />
    </div>
  );
}

export default page;
