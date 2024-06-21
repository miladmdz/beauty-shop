import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-Admin/Comments/details";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <Details/>
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
}

export default page;
