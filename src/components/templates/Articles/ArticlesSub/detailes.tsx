import ArticleBox from "@/components/modules/ArticleBox/ArticleBox";
import React from "react";

function Detailes() {
  let articles = [
    {
      id: 1,
      img: "../images/Articles/Capture1.jpg",
      title: "شیلد لب چیست(مراحل آن ونکات مهم)",
      desc: "	برای پاسخ به سوال شید لب چیست باید گفت سایه شیدینگ لب یکی از عمل های زیبایی سرپایی است که در آن با استفاده از سوزن...",
      createdAt: "1403/02/27",
      views: "1900",
      link: "/",
    },
    {
      id: 2,
      img: "../images/Articles/Capture2.jpg",
      title: "روش تهیه ماسک برنج برای چروک صورت",
      desc: "یکی از روش های خانگی برای جوانسازی پوست، استفاده از ماسک برنج برای چروک صورت است که اثرات فوق العاده ای دارد. شما می توانید از...",
      createdAt: "1403/02/26",
      views: "25533",
      link: "/",
    },
    {
      id: 3,
      img: "../images/Articles/Capture3.jpg",
      title: "معرفی بهترین ادکلن سرد و تلخ زنانه",
      desc: "اگر به دنبال عطری جذاب و خاص برای فصل بهار و تابستان هستید، باید گزینه ای با ترکیبی از نت های مرکباتی و گلی را انتخاب...",
      createdAt: "1403/02/25",
      views: "126",
      link: "/",
    },
    {
      id: 4,
      img: "../images/Articles/Capture4.jpg",
      title: "معرفی ادکلن برای افراد سیگاری",
      desc: "بوی سیگار زننده و رایحه آن نیز سرد است؛ این دو خصوصیت علاوه بر آزار اطرافیان در آنان حس افسردگی هم ایجاد می کند. به همین",
      createdAt: "1403/03/02",
      views: "29",
      link: "/",
    },
    {
      id: 5,
      img: "../images/Articles/Capture5.jpg",
      title: "انواع طبع عطر و تناسب آنها با مزاج افراد",
      desc: "استفاده از عطری ناهمگون با طبع شما روی سلامتی و رفتارتان اثر می گذارد. یک فرد گرم‌ مزاج با استشمام رایحه گرم سردرد می گیرد و...",
      createdAt: "1403/03/01",
      views: "64",
      link: "/",
    },
    {
      id: 6,
      img: "../images/Articles/Capture6.jpg",
      title: "معرفی بهترین ریمل ضد حساسیت چشم و نکات کلیدی در انتخاب",
      desc: "اگر چشمان حساسی دارید و با استفاده از ریمل های مختلف، احساس التهاب یا خارش را تجربه کرده اید، بهتر است در انتخاب محصول سازگار با...",
      createdAt: "1403/02/31",
      views: "100",
      link: "/",
    },
  ];
  return (
    <div className="container mb-20">
      <h1 className="text-3xl font-bold text-primryCream">
        لیست مقالات مراقبت از پوست
      </h1>
      {/* list articles */}
      <div className="flex flex-wrap items-center justify-between child:w-[100%] xs:child:w-[40%] lg:child:w-[30%] child:my-5 mt-5">
        {articles.map((article) => (
          <ArticleBox {...article} />
        ))}
      </div>
    </div>
  );
}

export default Detailes;
