import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-Admin/Tickets/details";
import connectToDB from "@/configs/db";
import ticketModel from "@/model/Ticket";
import React from "react";

const page = async () => {
  connectToDB();
  const Tickets = await ticketModel
    .find({ isAnswer: false })
    .sort({ _id: -1 })
    .populate("user", "_id firstName email phone")
    .populate("department")
    .lean();
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <Details Tickets={JSON.parse(JSON.stringify(Tickets))} />
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
};

export default page;
