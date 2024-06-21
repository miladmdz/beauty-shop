import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import AddOffer from "@/components/templates/P-Admin/Offer/addOffer";
import OffersList from "@/components/templates/P-Admin/Offer/offersList";
import React from "react";

function page() {
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <AddOffer />
          <OffersList />
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
}

export default page;
