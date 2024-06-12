import Footer from '@/components/modules/Footer/Footer'
import NavBar from '@/components/modules/NavBar/NavBar'
import Detailes from '@/components/templates/BestDiscount/detailes'
import Road from '@/components/templates/BestDiscount/road'
import React from 'react'

function page() {
  return (
    <div>
        <NavBar/> 
            <Road route={"تخفیف دار ها"}/>
            <Detailes/>
        <Footer/>
    </div>
  )
}

export default page