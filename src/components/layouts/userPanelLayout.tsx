import React from "react";
import SideBar from "../templates/P-User/Layout/sideBar";
import TopBar from "../templates/P-User/Layout/topBar";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelper";

type userPanelLayoutProps = {
  children: React.ReactNode;
};

const UserPanelLayout = async ({ children }: userPanelLayoutProps) => {
 
  return (
    <div className="flex items-start w-full h-full">
      <SideBar />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default UserPanelLayout;
