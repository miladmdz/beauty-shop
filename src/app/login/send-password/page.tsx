import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Sendpassword from "@/components/templates/Login/sendpassword";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Sendpassword />
      <Footer />
    </div>
  );
}

export default page;
