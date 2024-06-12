import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/Articles/details";
import Road from "@/components/templates/Articles/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road route={"مجله مد و زیبایی"} />
      <Details />
      <Footer />
    </div>
  );
}

export default page;
