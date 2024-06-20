import UserPanelLayout from '@/components/layouts/userPanelLayout'
import NavBar from '@/components/modules/NavBar/NavBar'
import React from 'react'

function page() {
  return (
    <div>
      <NavBar/>
    <UserPanelLayout>
      <div></div>
    </UserPanelLayout>
  </div>
  )
}

export default page