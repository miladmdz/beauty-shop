"use client";
import React, { useState } from "react";
import { IoEnterOutline } from "react-icons/io5";
import Link from "next/link";
import { validEmail, validPhoneNumbre } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateEmail } from "@/redux/slice";
import Swal from "sweetalert2";

function Details() {
  const router = useRouter();

  const email = useSelector((state: RootState) => state.email.value);
  const dispatch = useDispatch();

  const [emailPhone, setEmailPhone] = useState<string>("");

  const formHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isPhone = validPhoneNumbre(emailPhone);
    const isEmail = validEmail(emailPhone);

    if (isPhone || isEmail) {
    } else {
      Swal.fire({
        icon: "error",
        title:
          "شماره یا ایمیل مورد نظر اشتباه است (مثال:09121234567 email@example.com)",
        showConfirmButton: true,
        confirmButtonText: "تلاش مجدد",
      }).then((result) => {
        setEmailPhone("");
      });
    }
    if (isEmail) {
      const res = await fetch("/api/auth/signin/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailPhone }),
      });
      console.log(res);
      if (res.status === 201) {
        dispatch(updateEmail(emailPhone));
        router.push("login/send-password");
      }
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
              src="./images/Icon/Capture1.png"
              alt=""
            />
          </div>
          <div className="text-2xl font-bold">ورود</div>
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
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
                className="outline-none py-2 px-1"
                type="text"
                name=""
                id=""
                placeholder="شماره موبایل یا ایمیل"
              />
            </div>
          </div>
          <div className={`text-green-600 text-xxs w-full mt-1`}>
            شماره موبایل یا ایمیل خودرا وارد کنید
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

export default Details;
