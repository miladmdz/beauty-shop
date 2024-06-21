import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div></div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
}

export default page;
