import React from 'react'
import SideBar from '../templates/P-Admin/Layout/sideBar';
import TopBar from '../templates/P-Admin/Layout/topBar';

type adminPanelLayoutProps = {
    children: React.ReactNode;
  };

function AdminPanelLayout({children}:adminPanelLayoutProps) {
  return (
    <div className="flex items-start w-full h-full">
    <SideBar />
    <div className="w-full">
      <TopBar />
      {children}
    </div>
  </div>
  )
}

export default AdminPanelLayout