"use client";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import { TicketType } from "@/components/Type/Ticket.type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { json } from "stream/consumers";
import Swal from "sweetalert2";

type DetailsProps = {
  Tickets: TicketType[];
};

function Details({ Tickets }: DetailsProps) {
  const router = useRouter();

  const [ticketText, setTicketText] = useState<string>("");

  const setIsShowTicketHandler = async (data: string) => {
    Swal.fire({
      icon: "info",
      title: "متن تیکت",
      text: data,
      showConfirmButton: true,
      confirmButtonText: "فهمیدم",
    });
  };
  const answerTicketHandler = async (item: TicketType) => {
    //validation
    if (!item) {
      return Swal.fire({
        icon: "error",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }

    Swal.fire({
      icon: "question",
      title: "متن پاسخ تیکت",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "لغو",
      confirmButtonText: "ارسال",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
    }).then(async (result) => {
      //validation
      if (!result.value) {
        return Swal.fire({
          icon: "error",
          title: "لطفا کادر مورد نظر را پر کنید",
          showConfirmButton: true,
          confirmButtonText: "تلاش مجدد",
        });
      }
      if (result.isConfirmed) {
        //code
        let answerTicket = {
          ...item,
          ticketID: item._id,
          body: result.value,
        };
        const res = await fetch("/api/ticket/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answerTicket),
        });
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "پاسخ با موفقیت ارسال شد",
            showConfirmButton: true,
            confirmButtonText: "فهمیدم",
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

  const showAnswerHandler = async (data: TicketType) => {
    console.log(data._id);
    const res = await fetch("/api/ticket/show-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data._id }),
    });

    const dataRes = await res.json();
    if (res.status === 201) {
      return Swal.fire({
        icon: "success",
        title: ":پاسخ",
        text: dataRes[0].body,
        showConfirmButton: true,
        confirmButtonText: "فهمیدم",
      });
    } else if (res.status === 422) {
      return Swal.fire({
        icon: "error",
        title: "اطلاعات اشتباه است",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    } else if (res.status === 421) {
      return Swal.fire({
        icon: "warning",
        title: "تیکت شما پاسخی ندارد",
        showConfirmButton: true,
        confirmButtonText: "فهمیدم",
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "اشکال از سمت سرور",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }
  };

  const banUser = async (email: string, phone: Number) => {
    Swal.fire({
      icon: "question",
      title: "از تغییر بن مطمین هستید؟؟",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (Result) => {
      if (Result.isConfirmed) {
        const res = await fetch("/api/user/ban", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone }),
        });
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "کاربر با موفقیت بن شد",
            showConfirmButton: true,
            confirmButtonText: "متوجه شدم",
          }).then((result) => {
            router.refresh();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "مشکل از سمت سرور",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          });
        }
      }
    });
  };

  console.log(Tickets);
  return (
    <div>
      <PageTitle title="لیست تیکت ها" />
      {/* Tickets */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>وضعیت</th>
              <th>کاربر</th>
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده پاسخ</th>
              <th>مشاهده تیکت</th>
              <th>پاسخ</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {Tickets.map((item, index) => (
              <tr
                key={item._id}
                className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center"
              >
                <td>{index + 1}</td>
                <td
                  className={`${
                    item.hasAnswer ? "bg-primryGreen2" : "bg-primryRed"
                  } text-white`}
                >
                  {item.hasAnswer ? "پاسخ داده شد" : "بی پاسخ"}
                </td>
                <td className="line-clamp-1 w-[100px] text-sm">
                  {item.user.firstName}
                </td>
                <td>{item.title}</td>
                <td>{item.department.title}</td>
                <td>
                  <button
                    onClick={() => showAnswerHandler(item)}
                    className="w-full bg-black text-white rounded-md"
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => setIsShowTicketHandler(item.body)}
                    className="w-full bg-black text-white rounded-md"
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => answerTicketHandler(item)}
                    className="w-full bg-primryCream text-white rounded-md"
                  >
                    پاسخ
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => banUser(item.user.email, item.user.phone)}
                    className="w-full bg-primryCream text-white rounded-md"
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Details;
