import Footer from '@/components/modules/Footer/Footer'
import NavBar from '@/components/modules/NavBar/NavBar'
import Detailes from '@/components/templates/Articles/ArticlesSub/detailes'
import Road from '@/components/templates/Articles/ArticlesSub/road'
import React from 'react'

function page() {
  return (
    <div>
        <NavBar/>
        <Road route={"مجله مد و زیبایی/مراقبت از پوست"}/>
        <Detailes/>
        <Footer/>
    </div>
  )
}

export default page