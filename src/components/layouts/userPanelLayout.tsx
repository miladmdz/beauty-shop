import React from "react";
import SideBar from "../templates/P-User/Layout/sideBar";
import TopBar from "../templates/P-User/Layout/topBar";

type userPanelLayoutProps = {
  children: React.ReactNode;
};

function UserPanelLayout({ children }: userPanelLayoutProps) {
  return (
    <div className="flex items-start w-full h-full">
      <SideBar />
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default UserPanelLayout;
