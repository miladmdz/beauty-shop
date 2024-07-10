import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-Admin/Users/details";
import userModel from "@/model/User";
import React from "react";

const page = async () => {
  const users = await userModel.find({});
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <Details users={JSON.parse(JSON.stringify(users))} />
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
};

export default page;
