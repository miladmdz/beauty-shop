"use client";
import React from "react";
import PageTitle from "../../../modules/BreadCrumbs/pageTitle";
import { ProductsResultType } from "@/components/Type/Products.type";
import Link from "next/link";
import productsModel from "@/model/Product";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type ProductListProps = {
  products: ProductsResultType[];
};

function ProductsList({ products }: ProductListProps) {
  const router = useRouter();

  const deleteProductHandler = async (ID: string | undefined) => {
    Swal.fire({
      icon: "question",
      title: "ایا از حذف محصول اطمینان دارید",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/product/remove-product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ID }),
        });

        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "محصول شما با موفیقت حذف شد",
            showConfirmButton: true,
            confirmButtonText: "متوجه شدم",
          }).then((result) => {
            router.refresh();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "اشکال از سمت سرور",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          });
        }
      }
    });
  };
  return (
    <div className="mt-10">
      <PageTitle title="لیست محصولات" />
      <div>
        {/* products */}
        <div>
          <table className="w-full flex flex-col">
            <thead className="w-full">
              <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
                <th>شناسه</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>امتیاز</th>
                <th>مشاهده جزییات</th>
                <th>ویرایش</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {products.length > 0 ? (
                products.map((item, index) => (
                  <tr
                    key={index}
                    className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center"
                  >
                    <td>{index + 1}</td>
                    <td className="line-clamp-1 w-[100px] text-sm">
                      {item.nameFa}
                    </td>
                    <td>{item.price?.toLocaleString()}</td>
                    <td>{item.rate}</td>
                    <td>
                      <Link
                        href={`/product/${item._id}`}
                        className="w-full text-center bg-black text-white rounded-md"
                      >
                        مشاهده جزییات
                      </Link>
                    </td>
                    <td>
                      <button className="w-full bg-black text-white rounded-md">
                        ویرایش
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteProductHandler(item._id)}
                        className="w-full bg-primryCream text-white rounded-md"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="w-full text-center py-10">
                  <h2 className="text-3xl text-primryCream2 font-bold">
                    محصولی وجود ندارد...
                  </h2>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
