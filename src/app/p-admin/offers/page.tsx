import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import AddOffer from "@/components/templates/P-Admin/Offer/addOffer";
import OffersList from "@/components/templates/P-Admin/Offer/offersList";
import connectToDB from "@/configs/db";
import discountModel from "@/model/Discount";
import ticketModel from "@/model/Ticket";
import React from "react";

const page = async () => {
  connectToDB();
  const offers = await discountModel.find().sort({ _id: -1 }).populate("user","firstName");
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <AddOffer />
          <OffersList offers={offers}/>
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
};

export default page;
