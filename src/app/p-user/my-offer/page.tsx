import UserPanelLayout from "@/components/layouts/userPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-User/MyOffer/details";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <UserPanelLayout>
        <div className="container">
          <Details />
        </div>
      </UserPanelLayout>
      <Footer />
    </div>
  );
}

export default page;
