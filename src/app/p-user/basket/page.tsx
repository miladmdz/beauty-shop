import UserPanelLayout from "@/components/layouts/userPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-User/Basket/details";
import PageTitle from "@/components/modules/ArticleBox/pageTitle";
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
