import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import Details from "@/components/templates/Articles/ArticlesSub/ArticlesSubSub/details";
import Road from "@/components/templates/Articles/ArticlesSub/ArticlesSubSub/road";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <Road
        route={
          "مجله مد و زیبایی/مراقبت از پوست/ روش های از بین بردن قرمزی جوش صورت در یک روز"
        }
      />
      <Details />
      <Footer />
    </div>
  );
}

export default page;
