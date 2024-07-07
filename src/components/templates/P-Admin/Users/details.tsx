"use client";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import { UserType } from "@/components/Type/User.type";
import { role } from "@/utils/constant";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

type DetailsProps = {
  users: UserType[];
};

function Details({ users }: DetailsProps) {
  const router = useRouter();

  const editUser = async () => {};

  const changeRole = async (id: string) => {
    Swal.fire({
      icon: "question",
      title: "از تغییر نقش کاربر مطمین هستید؟؟",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (Result) => {
      if (Result.isConfirmed) {
        const res = await fetch("/api/user/role", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        if (res.status === 201) {
          router.refresh();
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

  const deleteUser = async (id: string) => {
    Swal.fire({
      icon: "question",
      title: "از حذف کاربر مطمین هستید؟؟",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (Result) => {
      if (Result.isConfirmed) {
        const res = await fetch("/api/user/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "کاربر با موفقیت حذف شد",
            showConfirmButton: true,
            confirmButtonText: "فهمیدم",
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

  const banUser = async (email: string, phone: number) => {
    Swal.fire({
      icon: "question",
      title: "از تغییر نقش کاربر مطمین هستید؟؟",
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
  return (
    <div>
      <PageTitle title="لیست کاربران" />
      {/* users */}
      <div>
        <table className="w-full flex flex-col">
          <thead className="w-full">
            <tr className="w-full flex items-center justify-between font-bold child:w-full child:flex child:justify-center">
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="w-full flex font-bold items-center justify-between py-5 child:w-full child:flex child:justify-center"
              >
                <td>{index + 1}</td>
                <td className="line-clamp-1 w-[100px] text-sm">
                  {user.firstName}-{user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role === role.ADMIN ? "مدیر" : "کاربر"}</td>
                <td>
                  <button
                    onClick={editUser}
                    className="w-full bg-black text-white rounded-md"
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => changeRole(user._id)}
                    className="w-full bg-black text-white rounded-md"
                  >
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="w-full bg-primryCream text-white rounded-md"
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => banUser(user.email, user.phone)}
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
