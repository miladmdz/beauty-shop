import UserPanelLayout from "@/components/layouts/userPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import DataBox from "@/components/templates/P-User/Boxs/dataBox";
import Orders from "@/components/templates/P-User/orders";
import Tickets from "@/components/templates/P-User/tickets";
import connectToDB from "@/configs/db";
import userModel from "@/model/User";
import { authUser } from "@/utils/serverHelper";
import React from "react";

const page = async () => {


  return (
    <div>
      <NavBar />
      <UserPanelLayout>
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-6">
          <DataBox title="تیکت" value={4} />
          <DataBox title="کامنت" value={2} />
          <DataBox title="سفارش" value={0} />
          <DataBox title="علاقه مندی" value={1} />
        </div>
        <section className="container flex items-start gap-x-5">
          <Tickets />
          <Orders />
        </section>
      </UserPanelLayout>
      <Footer />
    </div>
  );
};

export default page;
