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
        <div className="container flex flex-col items-start gap-x-5">
          <section className="w-full h-80 flex flex-col font-sans">
            <h2 className="font-bold text-2xl text-primryCream2 py-4">
              نرخ فروش
            </h2>
            <SalesChart />
          </section>
          <section className="w-full h-80 flex flex-col font-sans">
            <h2 className="font-bold text-2xl text-primryCream2 py-4">
              نرخ رشد
            </h2>
            <GrowChart />
          </section>
        </div>
      </AdminPanelLayout>
      <Footer />
    </div>
  );
}

export default page;
