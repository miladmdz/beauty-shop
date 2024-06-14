import React from "react";
import { IoMdNotifications } from "react-icons/io";

function TopBar() {
  return (
    <div className="w-full h-fit bg-black flex items-center justify-between px-8 py-3 border-b-4 border-red-900">
      {/* img */}
      <div className="flex items-center gap-x-2">
        <div>
          <img
            className="w-14 h-14 rounded-full"
            src="./images/User/user.jpg"
            alt="image profile user"
          />
        </div>
        <div className="flex flex-col items-start text-white text-sm">
          {/* name */}
          <div>میلاد محمودزاده</div>
          {/* role */}
          <div className="text-gray-400 font-bold">ادمین</div>
        </div>
      </div>
      {/* notif */}
      <div className="relative flex w-10 h-10 items-center justify-center bg-red-900 rounded-md">
        <span className="absolute flex items-center justify-center text-red-900 text-xs bg-white w-5 h-5 -right-2 -top-2 rounded-full">
          1
        </span>
        <IoMdNotifications className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default TopBar;
