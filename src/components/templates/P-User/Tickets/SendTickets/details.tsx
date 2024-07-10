"use client";
import PageTitle from "@/components/modules/BreadCrumbs/pageTitle";
import { UserType } from "@/components/Type/User.type";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

type DetailsProps = {
  user: UserType;
};

function Details({ user }: DetailsProps) {
  const [departments, setDepartments] = useState<
    { title: string; _id: string }[]
  >([]);
  const [subDepartments, setSubDepartments] = useState<
    { title: string; _id: string }[]
  >([]);

  const [selectDeaprtments, setSelectDepartments] = useState<string>("");
  const [selectSubDeaprtments, setSelectSubDepartments] = useState<string>("");

  const [titleTicket, setTitleTicket] = useState<string>("");
  const [piority, setPiorirty] = useState<string>("");
  const [textTicket, setTextTicket] = useState<string>("");

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/department");
      const data = await res.json();
      setDepartments([...data]);
    };
    getDepartments();
  }, []);

  const selectDepartmentHandler = async (id: string) => {
    setSelectDepartments(id);
    const res = await fetch(`/api/department/sub/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    setSubDepartments([...data]);
  };

  const sentTicket = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let newTicket = {
      department: selectDeaprtments,
      subDepartment: selectSubDeaprtments,
      user: user._id,
      title: titleTicket,
      body: textTicket,
      piority,
    };
  };
  return (
    <div>
      <PageTitle
        title="ارسال تیکت جدید"
        link="/p-user/tickets"
        textlink="همه تیکت ها"
      />
      {/* add tickets */}
      <form action="" className="">
        <div className="flex flex-wrap items-center justify-between">
          {/* department */}

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="departman">
              دپارتمان را انتخاب کنید:
            </label>
            <select
              onChange={(e) => selectDepartmentHandler(e.target.value)}
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="departman"
            >
              <option value="-1">لطفا دپارتمان را انتخاب کنید</option>
              {departments.map((item) => (
                <option key={item._id} value={item._id}>
                  {(item as { title: string }).title}
                </option>
              ))}
            </select>
          </div>

          {/* sub department */}

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="type-ticket">
              نوع تیکت را انتخاب کنید:
            </label>
            <select
              onChange={(e) => setSelectSubDepartments(e.target.value)}
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="type-ticket"
            >
              <option value="-1">لطفا یک مورد را انتخاب کنید</option>
              {subDepartments.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>

          {/* title */}

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="title-ticket">
              عنوان تیکت را وارد کنید:
            </label>
            <input
              value={titleTicket}
              onChange={(e) => setTitleTicket(e.target.value)}
              id="title-ticket"
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              type="text"
              placeholder="عنوان..."
            />
          </div>

          {/* priority */}

          <div className="w-[49%] flex flex-col items-start gap-y-2">
            <label className="font-bold pt-4" htmlFor="important">
              سطح اولویت تیکت را انتخاب کنید:
            </label>
            <select
              onChange={(e) => setPiorirty(e.target.value)}
              name=""
              className="w-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
              id="important"
            >
              <option value="-1">لطفا یک مورد را انتخاب کنید</option>
              <option value="3">بالا</option>
              <option value="2">متوسط</option>
              <option value="1">پایین</option>
            </select>
          </div>
        </div>
        {/* text ticket */}
        <div className="w-full h-64 flex flex-col items-start gap-y-2">
          <label className="font-bold pt-4" htmlFor="text-ticket">
            محتوای تیکت را وارد نمایید:
          </label>
          <textarea
            value={textTicket}
            onChange={(e) => setTextTicket(e.target.value)}
            name=""
            className="w-full h-full outline-none border-2 border-primryCream2 rounded-md px-1 py-1"
            id="text-ticket"
          ></textarea>
        </div>

        <div className="w-full flex flex-col gap-y-2 items-center bg-primryCream3 rounded-md mt-5 py-4">
          <p>حداکثر اندازه: 6 مگابایت</p>
          <p>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</p>
          <input className="text-sm" type="file" name="" id="" />
        </div>

        <button
          onClick={(e) => sentTicket(e)}
          className="w-40 h-10 mt-8 mb-10 rounded-md flex gap-x-2 justify-center items-center bg-primryCream2 text-white"
        >
          <span className="text-xl">
            <IoIosSend />
          </span>
          ارسال تیکت
        </button>
      </form>
    </div>
  );
}

export default Details;
