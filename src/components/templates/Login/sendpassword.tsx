"use client";
import { RootState } from "@/redux/store";
import { validPassword } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import swal from "sweetalert2";

function Sendpassword() {
  const router = useRouter();
  const email = useSelector((state: RootState) => state.email.value);
  const [password, setPassword] = useState<string>("");

  const formHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const isValidPassword = validPassword(password);
    if (isValidPassword) {
      const res = await fetch("/api/auth/signin/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 201) {
        swal
          .fire({
            icon: "success",
            title: "ورورد شما با موفقیت انجام شد",
            showConfirmButton: true,
            confirmButtonText: "متوجه شدم",
          })
          .then((result) => {
            router.push("/p-user");
          });
      } else if (res.status === 401) {
        swal
          .fire({
            icon: "error",
            title: "پسوورد اشتباه است",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          })
          .then((result) => {
            setPassword("");
          });
      } else {
        swal
          .fire({
            icon: "error",
            title: "اشکال از سمت سرور",
            showConfirmButton: true,
            confirmButtonText: "تلاش مجدد",
          })
          .then((result) => {
            router.push("/login");
          });
      }
    } else {
      swal
        .fire({
          icon: "error",
          title: "رمز اشتباه است",
          text: "پسوورد باید دارای  حروف بزرگ لاتین و عدد و(#?!@$ %^&*-)باشد",
          showConfirmButton: true,
          confirmButtonText: "تلاش مجدد",
        })
        .then((result) => {
          setPassword("");
        });
    }
  };

  return (
    <div className="xs:container flex mt-10 xs:mt-20 justify-center h-[70vh]">
      <div className="w-[500px] h-[300px] flex flex-col justify-between items-center xs:shadow-primryShadow">
        {/* part top  */}
        <div className="flex w-[95%] items-center justify-between gap-x-8 mt-4">
          <div>
            <img
              className="w-8 xs:w-12"
              src="../images/Icon/Capture1.png"
              alt=""
            />
          </div>
          <div className="text-2xl font-bold">رمز عبور</div>
          <div>
            <IoEnterOutline className="text-3xl xs:text-5xl text-primryCream" />
          </div>
        </div>
        {/* input */}
        <div className="w-[90%]">
          <div className="w-full flex flex-col items-center">
            {/* input email or phone */}
            <div className="w-full border border-gray-400/50">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none py-2 px-1"
                type="text"
                name=""
                id=""
                placeholder="لطفا رمز عبور خودرا وارد کنید"
              />
            </div>
          </div>
          <div className={`text-green-600 text-xxs w-full mt-1"`}>
            پسوورد خودرا وارد کنید
          </div>
        </div>
        {/* button */}
        <div className="w-[90%]">
          <button
            onClick={(e) => formHandler(e)}
            className="text-white bg-primryGreen py-2 rounded-lg w-full"
          >
            ورود
          </button>
        </div>
        {/* register */}
        <div className="mb-4">
          <p>
            اگر قبلا ثبت نام نکرده اید،{" "}
            <Link href="register" className="text-primryCream2 font-bold">
              ثبت نام
            </Link>{" "}
            کنید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sendpassword;
