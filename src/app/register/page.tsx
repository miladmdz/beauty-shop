import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Form from "@/components/templates/Register/form";
import React from "react";
import connectToDB from "../../../configs/db";

function page() {
  connectToDB();
  return (
    <div>
      <NavBar />
      <Form />
      <Footer />
    </div>
  );
}

export default page;
