import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-Admin/Comments/details";
import connectToDB from "@/configs/db";
import commentModel from "@/model/Comment";
import React from "react";

const page = async () => {
  connectToDB();
  const comments = await commentModel.find({}).populate("auther","firstName lastName phone email").lean();

  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <Details comments={JSON.parse(JSON.stringify(comments))} />
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
};

export default page;
