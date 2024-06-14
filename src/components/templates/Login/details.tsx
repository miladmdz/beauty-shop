"use client";
import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, Input, InputLabel } from "@mui/material";
import { IoEnterOutline } from "react-icons/io5";

function Details() {
  return (
    <div className="xs:container flex mt-10 xs:mt-20 justify-center h-[70vh]">
      <div className="w-[500px] h-[300px] flex flex-col justify-between items-center xs:shadow-primryShadow">
        {/* part top  */}
        <div className="flex w-[95%] items-center justify-between gap-x-8 mt-4">
          <div>
            <img className="w-8 xs:w-12" src="./images/Icon/Capture1.png" alt="" />
          </div>
          <div className="text-2xl font-bold">ورود</div>
          <div>
            <IoEnterOutline className="text-3xl xs:text-5xl text-primryCream" />
          </div>
        </div>
        {/* input */}
        <div className="w-[90%]">
          <div className="w-full flex flex-col items-center">
            <div className="w-full border border-gray-400/50">
              <input
                className="outline-none py-2 px-1"
                type="text"
                name=""
                id=""
                placeholder="شماره موبایل یا ایمیل"
              />
            </div>
          </div>
          <div className="text-green-600 text-xxs w-full mt-1">
            شماره موبایل یا ایمیل خودرا وارد کنید
          </div>
        </div>
        {/* button */}
        <div className="w-[90%]">
          <button className="text-white bg-primryGreen py-2 rounded-lg w-full">
            ورود
          </button>
        </div>
        {/* register */}
        <div className="mb-4">
          <p>
            اگر قبلا ثبت نام نکرده اید،{" "}
            <span className="text-primryCream2 font-bold">ثبت نام</span> کنید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
