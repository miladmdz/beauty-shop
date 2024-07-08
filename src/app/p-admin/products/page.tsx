import AdminPanelLayout from "@/components/layouts/adminPanelLayout";
import Footer from "@/components/modules/Footer/Footer";
import NavBar from "@/components/modules/NavBar/NavBar";
import AddProduct from "@/components/templates/P-Admin/Products/addProduct";
import ProductsList from "@/components/templates/P-Admin/Products/productsList";
import connectToDB from "@/configs/db";
import productsModel from "@/model/Product";
import React from "react";

const page = async () => {
  connectToDB();
  const products = await productsModel.find();
  return (
    <>
      <NavBar />
      <AdminPanelLayout>
        <div className="container">
          <AddProduct />
          <ProductsList products={JSON.parse(JSON.stringify(products))} />
        </div>
      </AdminPanelLayout>
      <Footer />
    </>
  );
};



export default page;
