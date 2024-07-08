import UserPanelLayout from "@/components/layouts/userPanelLayout";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-User/Basket/details";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <UserPanelLayout>
        <div className="container">
          <PageTitle title="سفارش ها"/>

          <Details/>
        </div>
      </UserPanelLayout>
      <Footer/>
    </div>
  );
}

export default page;
