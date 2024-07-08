"use client";
import React, { useState } from "react";
import Comments from "./comments";
import AskAndAnswer from "./askAndAnswer";
import Video from "./video";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { ProductsResultType } from "@/components/Type/Products.type";

type TabsProps = {
  product: ProductsResultType;
};

function Tabs({ product }: TabsProps) {
  const [select, setSelect] = useState<string>("توضیحات محصول");
  const [selectMobile, setSelectMobile] = useState<string>("");

  const menuMobileHandler = (select: string) => {
    if (selectMobile) {
      setSelectMobile("");
    } else {
      setSelectMobile(select);
    }
  };

  return (
    <div className="container">
      {/* select part for desktop */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-x-12 border-b border-gray-600/50 child:py-6 mt-12 child:cursor-pointer child:transition-all">
          <li
            onClick={() => setSelect("توضیحات محصول")}
            className={`${select === "توضیحات محصول" && "font-bold"}`}
          >
            توضیحات محصول
          </li>
          <li
            onClick={() => setSelect("مشخصات محصول")}
            className={`${select === "مشخصات محصول" && "font-bold"}`}
          >
            مشخصات محصول
          </li>
          <li
            onClick={() => setSelect("ترکیبات")}
            className={`${select === "ترکیبات" && "font-bold"}`}
          >
            ترکیبات
          </li>
          <li
            onClick={() => setSelect("طرز استفاده")}
            className={`${select === "طرز استفاده" && "font-bold"}`}
          >
            طرز استفاده
          </li>
          <li
            onClick={() => setSelect("نطرات کاربران")}
            className={`${select === "نطرات کاربران" && "font-bold"}`}
          >
            نطرات کاربران
          </li>
          <li
            onClick={() => setSelect("پرسش و پاسخ")}
            className={`${select === "پرسش و پاسخ" && "font-bold"}`}
          >
            پرسش و پاسخ
          </li>
          <li
            onClick={() => setSelect("ویدیو و تیزر")}
            className={`${select === "ویدیو و تیزر" && "font-bold"}`}
          >
            ویدیو و تیزر
          </li>
        </ul>
        <div className="relative ">
          {/* desc */}
          <div
            className={`${
              select !== "توضیحات محصول" ? "hidden" : "fadein_anime"
            } `}
          >
            <h2 className="text-2xl font-bold py-5">
              توضیحات "{product.nameFa}"
            </h2>
            <p className="">{product.longDesc}</p>
          </div>
          {/* Specific */}
          <div
            className={`${
              select !== "مشخصات محصول" ? "hidden" : "fadein_anime"
            } `}
          >
            <h2 className="text-2xl font-bold py-5">
              مشخصات "{product.nameFa}"
            </h2>
            <div className="flex items-start gap-x-14">
              <ul className="child:font-bold child:my-5 w-[220px]">
                <li>کشور سازنده محصول</li>
                <li>نوع بسته بندی کارخانه</li>
                <li>مدت انقضا بعد از باز کردن درب محصول</li>
                <li>تاریخ انقضا درج شده توسط کارخانه</li>
                <li>وزن</li>
              </ul>
              <ul className="list-disc marker:text-primryCream2">
                <li className="my-5">ایتالیا</li>
                <li className="my-5">با جعبه - بدون سلفون</li>
                <li className="mt-6">18 ماه</li>
                <li className="mt-9">درج نشده است.</li>
                <li className="mt-12">{product.weight}</li>
              </ul>
            </div>
          </div>
          {/* Compounds */}
          <div
            className={`${select !== "ترکیبات" ? "hidden" : "fadein_anime"} `}
          >
            <h2 className="text-2xl font-bold py-5">
              ترکیبات "{product.nameFa}"
            </h2>
            <p>{product.Compounds}</p>
          </div>
          {/* How to use */}
          <div
            className={`${
              select !== "طرز استفاده" ? "hidden" : "fadein_anime"
            } `}
          >
            <h2 className="text-2xl font-bold py-5">
              طرز استفاده از "{product.nameFa}"
            </h2>
            <ul className="mr-4 list-disc">
              <li>
               {product.howToUse}
              </li>
            </ul>
          </div>
          {/* comments */}
          <div
            className={`${
              select !== "نطرات کاربران" ? "hidden" : "fadein_anime"
            }  w-full`}
          >
            <h2 className="text-2xl font-bold py-5">نطرات کاربران</h2>
            <Comments />
          </div>
          {/* ask & answer */}
          <div
            className={`${
              select !== "پرسش و پاسخ" ? "hidden" : "fadein_anime"
            }  w-full`}
          >
            <h2 className="text-2xl font-bold py-5">
              پرسش و پاسخ درباره "رژ لب مات انوی پیپا"
            </h2>
            <AskAndAnswer />
          </div>
          {/* video */}
          <div
            className={`${
              select !== "ویدیو و تیزر" ? "hidden" : "fadein_anime"
            }  h-[200px]`}
          >
            <h2 className="text-2xl font-bold py-5">
              ویدئو و تیزر مربوط به "رژ لب مات انوی پیپا"
            </h2>
            <Video />
          </div>
        </div>
      </div>
      {/* select part for mobile */}
      <div className="block md:hidden">
        <div>
          {/* desc */}
          <div className="flex w-full flex-col">
            <div
              onClick={() => menuMobileHandler("توضیحات محصول")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                توضیحات محصول
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "توضیحات محصول" ? "hidden" : ""
                  } `}
                />
                <FaMinus
                  className={`${
                    selectMobile === "توضیحات محصول" ? "" : "hidden"
                  } `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "توضیحات محصول" ? "hidden" : "fadein_anime"
              } `}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                توضیحات "رژلب مات انوی پیپا"
              </h2>
              <p className="text-sm xs:text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در اینبا استفاده از طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله در قرار گیرد.
              </p>
            </div>
          </div>
          {/* Specific */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("مشخصات محصول")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                مشخصات محصول
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "مشخصات محصول" ? "hidden" : ""
                  } `}
                />
                <FaMinus
                  className={`${
                    selectMobile === "مشخصات محصول" ? "" : "hidden"
                  } `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "مشخصات محصول" ? "hidden" : "fadein_anime"
              } `}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                مشخصات "رژلب مات انوی پیپا"
              </h2>
              <div className="flex items-start gap-x-14">
                <ul className="child:text-sm child:xs:text-base child:font-bold child:my-5 w-[220px]">
                  <li>کشور سازنده محصول</li>
                  <li>نوع بسته بندی کارخانه</li>
                  <li>مدت انقضا بعد از باز کردن درب محصول</li>
                  <li>تاریخ انقضا درج شده توسط کارخانه</li>
                  <li>وزن</li>
                </ul>
                <ul className="child:text-sm child:xs:text-base list-disc marker:text-primryCream2">
                  <li className="my-5">ایتالیا</li>
                  <li className="my-5">با جعبه - بدون سلفون</li>
                  <li className="mt-6">18 ماه</li>
                  <li className="mt-6 xs:mt-9">درج نشده است.</li>
                  <li className="mt-5 xs:mt-12">4.5 گرم</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Compounds */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("ترکیبات")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">ترکیبات</div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${selectMobile === "ترکیبات" ? "hidden" : ""} `}
                />
                <FaMinus
                  className={`${selectMobile === "ترکیبات" ? "" : "hidden"} `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "ترکیبات" ? "hidden" : "fadein_anime"
              } `}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                ترکیبات "رژلب مات انوی پیپا"
              </h2>
              <p className="text-sm xs:text-base">
                ترکيبات محصولاتی که ارسال می شود ممکن است بر حسب سری ساخت کمی با
                آنچه در اينجا می بينيد متفاوت باشد. براي اطلاع دقيق با پشتيبانی
                سايت در ارتباط باشيد.
                <br />
                <br />
                پنتا اریتریتیل، میکا، پلی اتیلن، C12-15 آلکیل بنزوات،
                OCTYLDODECANOL، ایزوستیل استئارات، CI 77891 (دی اکسید تیتانیوم
                کوپلیمر VP/Eicosene، فلورفلوگوپیت مصنوعی، آروما، کاپریل گلیکول،
                اوریزانول، توکوفریل استات، کره بوتیروسپرموم پارکی (کره روغنی)،
                روغن دانه (پنبه) روغن دانه)، روغن دانه هلیانتوس آنووس (روغن دانه
                هلیانتوس آنووس (آفتابگردان)، توکوفرول، لسیتین، پالمیتات
                آسکوربیل، گلیسریل استراتل، گلیسریل، گلیسریل، گلیسریل، گلیسریل،
                گلیسریل، گلیسریل، گلیسریل، گلیسریل، لسیتین، لسیتین، اسید سیتریک،
                BHA ، BHT.
              </p>
            </div>
          </div>
          {/* how to use */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("طرز استفاده")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                طرز استفاده
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "طرز استفاده" ? "hidden" : ""
                  } `}
                />
                <FaMinus
                  className={`${
                    selectMobile === "طرز استفاده" ? "" : "hidden"
                  } `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "طرز استفاده" ? "hidden" : "fadein_anime"
              } `}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                طرز استفاده از "رژلب مات انوی پیپا"
              </h2>
              <ul className="child:text-sm child:xs:text-base mr-4 list-disc">
                <li>
                  رژ لب انوی پیپا را به همراه مداد لب هم تناژ رژ لبتان استفاده
                  کنید.
                </li>
              </ul>
            </div>
          </div>
          {/* comments */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("نظرات کاربران")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                نظرات کاربران
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "نظرات کاربران" ? "hidden" : ""
                  }  w-full`}
                />
                <FaMinus
                  className={`${
                    selectMobile === "نظرات کاربران" ? "" : "hidden"
                  }  w-full`}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "نظرات کاربران" ? "hidden" : "fadein_anime"
              }  w-full`}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                نظرات کاربران
              </h2>
              <Comments />
            </div>
          </div>
          {/* ask and answer */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("پرسش و پاسخ")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                پرسش و پاسخ
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "پرسش و پاسخ" ? "hidden" : ""
                  }  `}
                />
                <FaMinus
                  className={`${
                    selectMobile === "پرسش و پاسخ" ? "" : "hidden"
                  }  `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "پرسش و پاسخ" ? "hidden" : "fadein_anime"
              } `}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                پرسش و پاسخ درباره "رژ لب مات انوی پیپا"
              </h2>
              <AskAndAnswer />
            </div>
          </div>
          {/* vide */}
          <div className="flex w-full flex-col ">
            <div
              onClick={() => menuMobileHandler("ویدیو و تیزر")}
              className="flex w-full items-center justify-between cursor-pointer"
            >
              <div className="text-sm xs:text-lg font-bold my-3">
                ویدیو و تیزر
              </div>
              <div className="text-primryCream">
                <FaPlus
                  className={`${
                    selectMobile === "ویدیو و تیزر" ? "hidden" : ""
                  }  `}
                />
                <FaMinus
                  className={`${
                    selectMobile === "ویدیو و تیزر" ? "" : "hidden"
                  }  `}
                />
              </div>
            </div>
            {/* more */}
            <div
              className={`${
                selectMobile !== "ویدیو و تیزر" ? "hidden" : "fadein_anime"
              }  h-[200px]`}
            >
              <h2 className="text-lg xs:text-2xl font-bold py-5">
                ویدئو و تیزر مربوط به "رژ لب مات انوی پیپا"
              </h2>
              <Video />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
