import UserPanelLayout from "@/components/layouts/userPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/P-User/Tickets/SendTickets/details";
import { authUser } from "@/utils/serverHelper";
import React from "react";

const page = async () => {
  const user = await authUser();
  return (
    <div>
      <NavBar />
      <UserPanelLayout>
        <div className="container">
          <Details user={JSON.parse(JSON.stringify(user))} />
        </div>
      </UserPanelLayout>
      <Footer />
    </div>
  );
};

export default page;
