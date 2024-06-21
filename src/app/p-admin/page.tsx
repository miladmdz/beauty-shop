import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import GrowChart from "@/components/templates/P-Admin/growChart";
import SalesChart from "@/components/templates/P-Admin/salesChart";
import DataBox from "@/components/templates/P-User/Boxs/dataBox";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <AdminPanelLayout>
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-6">
          <DataBox title="مجموع تیکت های دریافتی" value={4} />
          <DataBox title="مجموع محصولات سایت" value={2} />
          <DataBox title="مجموع سفارشات" value={0} />
          <DataBox title="مجموع کاربر های سایت" value={1} />
        </div>
        <section className="container flex flex-col items-start gap-x-5">
          <SalesChart />
          <GrowChart />
        </section>
      </AdminPanelLayout>
      <Footer />
    </div>
  );
}

export default page;
