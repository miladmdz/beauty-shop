import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/Privecy-Policy/details";
import Road from "@/components/templates/Privecy-Policy/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"قوانین"}/>
      <Details/>
      <Footer />
    </div>
  );
}

export default page;
