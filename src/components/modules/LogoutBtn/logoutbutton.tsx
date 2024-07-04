"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { RxExit } from "react-icons/rx";
import Swal from "sweetalert2";

function Logoutbutton() {
  const router = useRouter();
  const logoutHandler = async () => {
    const res = await fetch("api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "خروج از حساب با موفقیت انجام شد",
        showConfirmButton: true,
        confirmButtonText: "متوجه شدم",
      }).then((result) => {
        router.push("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "خروج از حساب با شکست مواجه شد",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      });
    }
  };
  return (
    <>
      {/* logout */}
      <div className="border-t border-white py-2 font-bold">
        <button
          onClick={logoutHandler}
          className="flex w-full items-center justify-between px-2 py-2 cursor-pointer"
        >
          <p className="text-lg">خروج</p>
          <span>
            <RxExit className="text-xl" />
          </span>
        </button>
      </div>
    </>
  );
}

export default Logoutbutton;
