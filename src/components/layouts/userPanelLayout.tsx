import React from "react";
import SideBar from "../templates/P-User/sideBar";
import TopBar from "../templates/P-User/topBar";

type userPanelLayoutProps = {
  children: React.ReactNode;
};

function UserPanelLayout({ children }: userPanelLayoutProps) {
  return (
    <div className="flex items-start w-full h-[100vh]">
      <SideBar />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default UserPanelLayout;
