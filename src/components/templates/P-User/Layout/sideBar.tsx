import Link from "next/link";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaBasketShopping, FaLocationDot, FaPercent } from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaCommentSlash, FaHeart } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import Logoutbutton from "@/components/modules/LogoutBtn/logoutbutton";
import { authUser } from "@/utils/serverHelper";

const SideBar = async () => {
  const user = await authUser();
  return (
    <div className="bg-primryCream2 w-80 sticky top-[67px] h-full text-white">
      <div className="container  flex flex-col justify-between">
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
              <Link href={"/p-user"}>پیشخوان</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaBasketShopping />
              </span>
              <Link href={"/p-user/basket"}>سفارش ها</Link>
            </li>
            <li>
              <span className="text-xl">
                <TfiCommentAlt />
              </span>
              <Link href={"/p-user/tickets"}> تیکت پشتیبانی</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaCommentSlash />
              </span>
              <Link href={"/p-user/comments"}>کامنت ها</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaHeart />
              </span>
              <Link href={"/p-user/favorites"}>علاقه مندی</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaPercent />
              </span>
              <Link href={"/p-user/my-offer"}>کد های تخفیف من</Link>
            </li>
            <li>
              <span className="text-xl">
                <FaLocationDot />
              </span>
              <Link href={"/p-user/my-locations"}>ادرس های من</Link>
            </li>
            <li>
              <span className="text-xl">
                <TbListDetails />
              </span>
              <Link href={"/p-user/my-details-account"}>جزِیات اکانت</Link>
            </li>
          </ul>
        </div>
        {/* log out btn */}
        <Logoutbutton />
      </div>
    </div>
  );
};

export default SideBar;
