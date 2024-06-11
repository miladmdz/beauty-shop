"use client";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";

type RoadProps = {
  route: string;
};

function Road({ route }: RoadProps) {
  return (
    <>
      <div className="container flex items-center py-10">
        <div className="flex items-center text-green-500">
          <IoHomeOutline />
          <Link href={"/"}>خانه</Link>
        </div>
        <span className="text-black px-2">/</span>
        <Link href={""} className="text-primryBlack">
          {route.split("/")[0]}
        </Link>
      </div>
    </>
  );
}

export default Road;
