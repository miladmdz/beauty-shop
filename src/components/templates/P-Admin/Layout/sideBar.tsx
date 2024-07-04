import Link from "next/link";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaLocationDot, FaPercent } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaCommentSlash, FaHeart } from "react-icons/fa";
import Logoutbutton from "@/components/modules/LogoutBtn/logoutbutton";
import { authUser } from "@/utils/serverHelper";
import connectToDB from "@/configs/db";

const SideBar=async()=> {
  const user=await authUser()
  return (
    <div className="bg-primryCream2 w-80 sticky top-[67px] h-[500px] text-white">
      <div className="container flex flex-col justify-between">
        {/* welcome */}
        <h2 className="text-center text-lg font-bold py-7 border-b border-white">
          خوش اومدی {user.firstName} عزیز
        </h2>
        {/* links */}
        <div>
          <ul className="child:my-5 child:cursor-pointer child:flex child:items-center child:gap-x-2">
            <li>
              <span className="text-xl">
                <MdOutlineSpaceDashboard />
              </span>
              <Link href={"/p-admin"}>پیشخوان</Link>
            </li>
            <li>
              <span className="text-xl">
                <TfiCommentAlt />
              </span>
              <Link href={"/p-admin/products"}> محصولات</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaCommentSlash />
              </span>
              <Link href={"/p-admin/users"}> کاربران</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaHeart />
              </span>
              <Link href={"/p-admin/comments"}> کامنت ها</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaPercent />
              </span>
              <Link href={"/p-admin/tickets"}>تیکت ها</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaLocationDot />
              </span>
              <Link href={"/p-admin/offers"}>تخفیفات</Link>
            </li>
          </ul>
        </div>
        {/* logout */}
        <Logoutbutton />
      </div>
    </div>
  );
}

export default SideBar;
