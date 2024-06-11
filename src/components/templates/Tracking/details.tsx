import React from 'react'

function Details() {
  return (
    <div className='container flex flex-col md:flex-row items-center md:items-start h-[100vh] md:h-[70vh]'>
        <div>
            <form action="" className='flex flex-col items-start gap-y-5'>
                <input className='border border-gray-500/70 py-3 px-1 w-60 xs:w-80 outline-none' type="text" placeholder='شماره همراه'/>
                <input className='border border-gray-500/70 py-3 px-1 w-60 xs:w-80 outline-none' type="text" placeholder='شماره پیگیری خودرا وارد کنید'/>
                <button className='w-60 xs:w-80 bg-primryGreen text-white text-center rounded-lg py-3'>پیگیری سفارش</button>
            </form>
        </div>
        <div className='w-full flex items-center justify-center'>
            <img className='down_anime w-[300px] h-[300px] xs:w-[400px] xs:h-[400px]' src="./images/etc/Capture2.png" alt="" />
        </div>
    </div>
  )
}

export default Details