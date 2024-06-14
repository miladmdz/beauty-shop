import UserPanelLayout from "@/components/layouts/userPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <UserPanelLayout>
        <div>
            milad
        </div>
      </UserPanelLayout>
      <Footer />
    </div>
  );
}

export default page;
