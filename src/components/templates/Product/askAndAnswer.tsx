"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

function AskAndAnswer() {
  const [id, setId] = useState<number | null>(null);

  const showAnswerHandler = (ID: number) => {
    if (id) {
      setId(null);
    } else {
      setId(ID);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-between h-fit md:h-96">
      {/* asks */}
      <div className="w-full md:w-[65%] h-52 md:h-72 overflow-y-auto">
        {/* ask and asnwer */}
        <div className="w-full">
          {/* ask */}
          <div
            onClick={() => showAnswerHandler(1)}
            className="flex items-center justify-between w-full cursor-pointer"
          >
            <div className="text-base xs:text-lg font-bold">
              ایا این محصول دارای تناژ رنگی صورتی می باشد؟
            </div>
            <div className="text-primryCream2 child:text-3xl">
              <div className={`${id === 1 ? "hidden" : "fadein_anime"}`}>
                <GoPlus />
              </div>
              <div className={`${id === 1 ? "fadein_anime" : "hidden"}`}>
                <AiOutlineMinus />
              </div>
            </div>
          </div>
          {/* answer */}
          <div className={`${id !== 1 ? "hidden" : "fadein_anime"} absolute`}>
            <h3 className="text-lg xs:text-xl font-bold text-primryCream2 mt-3">پاسخ:</h3>
            <p className="text-sm xs:text-lg mt-3">بله این محصول دارای4 تناژ صورتی هست.</p>
          </div>
        </div>
      </div>
      {/* create question */}
      <div className="w-full md:w-[30%]">
        <h3 className="text-2xl text-center">سوال خودرا بپرسید</h3>
        <form action="" className="flex flex-col">
          <input className="outline-none" type="text" placeholder="عنوان نظر" />
          <textarea
            className="w-full outline-none mt-5 h-36"
            name=""
            id=""
            placeholder="متن پرسش شما"
          ></textarea>

          <div className="text-center text-white mt-3 py-3 px-9 bg-primryCream2 rounded-xl">
            ارسال پرسش
          </div>
        </form>
      </div>
    </div>
  );
}

export default AskAndAnswer;
