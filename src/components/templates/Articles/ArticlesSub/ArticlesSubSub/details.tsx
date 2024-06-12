import Link from "next/link";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbEyeExclamation } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";
import { GoShareAndroid } from "react-icons/go";

function Details() {
  return (
    <div className="container flex lg:flex-row flex-col-reverse mb-5">
      {/* suggest */}
      <div>
        <div className="bg-white sticky top-[90px]">
          <div>مقالات مرتبط</div>
          <div className="flex lg:flex-col flex-row flex-wrap gap-y-5 items-start my-8">
            <Link className="flex items-start gap-2 w-full md:w-[50%] lg:w-80" href={"/"}>
              <img
                className="w-20"
                src="../../images/Articles/Capture11.jpg"
                alt="article image"
              />
              <p>اثرات مثبت سیاه دانه برای جوش صورت</p>
            </Link>
            <Link className="flex items-start gap-2 w-full md:w-[50%] lg:w-80" href={"/"}>
              <img
                className="w-20"
                src="../../images/Articles/Capture12.jpg"
                alt="article image"
              />
              <p>علت جوش زدن پشت بدن مردان و بهترین راه های درمان آن</p>
            </Link>
            <Link className="flex items-start gap-2 w-full md:w-[50%] lg:w-80" href={"/"}>
              <img
                className="w-20"
                src="../../images/Articles/Capture13.jpg"
                alt="article image"
              />
              <p>روش تهیه بهترین ماسک چروک دور چشم</p>
            </Link>
            <Link className="flex items-start gap-2 w-full md:w-[50%] lg:w-80" href={"/"}>
              <img
                className="w-20"
                src="../../images/Articles/Capture2.jpg"
                alt="article image"
              />
              <p>روش تهیه ماسک برنج برای چروک صورت</p>
            </Link>
            <Link className="flex items-start gap-2 w-full md:w-[50%] lg:w-80" href={"/"}>
              <img
                className="w-20"
                src="../../images/Articles/Capture14.jpg"
                alt="article image"
              />
              <p>بهترین ماسک خانگی برای پوست خشک و چروک</p>
            </Link>
          </div>
        </div>
      </div>

      {/* left part */}
      <div>
        {/* text */}
        <div>
          <h1 className="text-center text-xl text-primryCream font-bold py-3">
            اثرات مثبت سیاه دانه برای جوش صورت
          </h1>
          <div className="flex justify-center py-3">
            <img src="../../images/Articles/Capture11.jpg" alt="" />
          </div>
          <div className="mt-5">
            <p className="text-sm xl:text-base leading-10">
              سیاه دانه برای جوش صورت با توجه به خصوصیات ضد باکتریایی اش مورد
              استفاده قرار می گیرد. روغن این گیاه جوش های بلغمی، سرسیاه و چرکی
              را درمان می کند و ماسک تهیه شده از آن نیز برای انواع مختلف پوست از
              خشک گرفته تا چرب قابل استفاده است. همچنین انواع
              <Link href={"/"} className="font-bold text-primryGreen2">
                {" "}
                پماد، ژل و کرم ضد جوش{" "}
              </Link>
              آماده نیز برای رفع آکنه های صورت شما در بازار موجود است. به علاوه
              می توانید چند قطره روغن سیاه دانه را به محصولات مراقبی پوست همچون
              ماسک یا مرطوب کننده نیز اضافه کنید و از خواص آن بهره ببرید.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              خواص روغن سیاه دانه برای جوش صورت
            </h2>
            <p className="text-sm xl:text-base leading-10">
              سیاه دانه میوه یک گیاه کوچک و گل‌ دار است که علاوه بر تقویت سیستم
              ایمنی بدن انواع التهابات را هم کاهش می دهد و به همین خاطر برای
              درمان جوش صورت نیز به کار می رود. در واقع ویتامین A و اسیدهای
              آمینه موجود در روغن سیاه دانه برای آکنه صورت مفید هستند. خاصیت
              آنتی باکتریالی و ضد التهابی آن می تواند علاوه بر خود جوش جای آن را
              نیز محو کند و موجب تسکین عوارضش گردد. ترکیب قوی تیموکینون نه تنها
              عامل ایجاد آکنه را از بین می ‌برد بلکه جلوی تشکیل مجدد آن در صورت
              شما را نیز می گیرد. اسیدهای چرب این فراورده طبیعی جلوی مسدود شدن
              منافذ پوست را گرفته و باعث آبرسانی و مرطوب کنندگی پوست نیز می
              شوند.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              درمان آکنه و جوش با روغن سیاه دانه
            </h2>
            <p className="text-sm xl:text-base leading-10">
              روغن سیاه دانه با توجه به خصوصیات ضد باکتریایی اش می‌تواند انواع
              جوش و آکنه از قبیل بلغمی، سرسیاه و چرکی را درمان کند.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              درمان جوش‌ های بلغمی
            </h2>
            <p className="text-sm xl:text-base leading-10">
              جوش ‌های بلغمی زیر پوستی، سفت، قرمز و دارای چرک هستند. برای درمان
              این نوع آکنه ها مقدار کمی روغن سیاه دانه را با انگشت روی محل
              آسیب‌دیده بمالید و به نرمی ماساژ دهید. دقت کنید برای جوش‌ های قرمز
              التهابی به هیچ عنوان از این روغن استفاده نکنید چون موجب التهاب
              بیشترشان خواهد شد.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              درمان جوش‌ های سرسیاه
            </h2>
            <p className="text-sm xl:text-base leading-10">
              جوش‌های سرسیاه زمانی به وجود می آیند که منافذ صورت باز باشند و
              سلول‌های مرده با هوا ترکیب و اکسید ‌‌شوند. شایع‌ترین محل تشکیل این
              نوع عارضه پوستی روی بینی است. روغن سیاه دانه برای درمان این نوع
              آکنه نیز به کار می آید و موجب بستن منافذ و نتیجتا جلوگیری از ایجاد
              آن ها می گردد.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              درمان جوش ‌های چرکی
            </h2>
            <p className="text-sm xl:text-base leading-10">
              برای درمان جوش های چرکی با سیاه دانه دو راه حل موثر وجود دارد که
              می توانید هر یک از آنها را انتخاب کنید:
            </p>
            <h3 className="font-bold">روش اول</h3>
            <p className="text-sm xl:text-base leading-10">
              جوش ‌های چرکی معمولا در سن بلوغ به دلیل تغییرات هورمونی شایع می
              شوند. این عارضه معمولا با درد، التهاب و ترشحات چرکی همراه است. از
              سیاه دانه می توانید برای درمان این نوع آکنه هم استفاده کنید. کافی
              است ۲ قاشق غذاخوری از پودر آن را با مقداری سرکه مخلوط نموده و خمیر
              حاصله را به صورت ماسک روی جوش ها قرار دهید. اگر هفته ‌ای دو مرتبه
              این کار را انجام دهید به تدریج آکنه‌ های چرکی خشک شده و از بین
              خواهند رفت.
            </p>
            <h3 className="font-bold">روش دوم</h3>
            <p className="text-sm xl:text-base leading-10">
              به کمک پنبه مقداری روغن سیاه دانه را روی جوش های چرکی قرار داده و
              به آرامی با انگشت ماساژ دهید؛ دقت کنید که پنبه مورد استفاده
              استرلیزه باشد. روزی یک بار این کار را تکرار کنید تا اثرات آن به
              مرور آشکار شود.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              روش استفاده از ماسک سیاه دانه با توجه به نوع پوست
            </h2>
            <img src="../../images/Articles/Capture15.jpg" alt="" />
            <p className="leading-10 mt-4">
              در این قسمت با توجه به این که نوع پوست شما معمولی، خشک یا چرب است
              روش های تهیه ماسک سیاه دانه را برای درمان جوش صورتتان توضیح می
              دهیم. این ماسک ها همچنین منافذ پوست را باز کرده و موجب آبرسانی به
              آن می گردند.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              ماسک صورت سیاه دانه برای پوست معمولی
            </h2>
            <p className="text-sm xl:text-base leading-10">
              ترکیبات و مقدار مورد نیاز برای تهیه این ماسک به شرح جدول زیر است:
            </p>
            <div className="flex text-sm xs:text-base items-start gap-x-10 xs:gap-x-40 mr-5">
              <ul className="child:my-4">
                <li>ترکیبات</li>
                <li>شیر خام</li>
                <li>سیاه دانه</li>
              </ul>
              <ul className="child:my-4">
                <li>مقدار مورد نیاز</li>
                <li>1 قاشق غذاخوری</li>
                <li>1 قاشق غذاخوری</li>
              </ul>
            </div>
            <p className="text-sm xl:text-base leading-10">
              ابتدا به کمک آسیاب دانه های سیاه دانه را به صورت پودر ریز درآورید.
              سپس 1 قاشق غذاخوری از آن را با 1 قاشق غذاخوری شیر به خوبی مخلوط
              نموده و خمیر حاصله را روی جوش های صورت بمالید. پس از سپری شدن مدت
              زمان 15 دقیقه با آب سرد بشویید.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              ماسک صورت سیاه دانه برای پوست خشک
            </h2>
            <p className="text-sm xl:text-base leading-10">
              ترکیبات و مقدار مورد نیاز برای تهیه این ماسک را طبق جدول آماده
              کنید:
            </p>
            <div className="flex text-sm xs:text-base items-start gap-x-10 xs:gap-x-40 mr-5">
              <ul className="child:my-4">
                <li>ترکیبات</li>
                <li>سیاه دانه</li>
                <li>آرد نخودچی</li>
                <li>گلاب</li>
                <li>عسل</li>
              </ul>
              <ul className="child:my-4">
                <li>مقدار مورد نیاز</li>
                <li>1 قاشق چایخوری</li>
                <li>1 قاشق چایخوری</li>
                <li>1 قاشق چایخوری</li>
                <li>نصف قاشق چایخوری</li>
              </ul>
            </div>
            <p className="text-sm xl:text-base leading-10">
              دانه های سیاه دانه را آسیاب کنید تا به صورت پودر درآید و بقیه مواد
              را نیز اضافه و به خوبی مخلوط نمایید تا ماسک خمیری به دست آورید.
              ماسک را روی جوش های صورتتان بمالید و پسص از مدت زمان 20 دقیقه با
              آب سرد بشویید.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              ماسک سیاه دانه برای پوست چرب
            </h2>
            <p className="text-sm xl:text-base leading-10">
              برای تهیه این ماسک طبق جدول زیر ترکیبات و مقدار مورد نیاز را آماده
              کنید:
            </p>
            <div className="flex text-sm xs:text-base items-start gap-x-10 xs:gap-x-40 mr-5">
              <ul className="child:my-4">
                <li>ترکیبات</li>
                <li>سیاه دانه</li>
                <li>قهوه</li>
                <li>پودر دارچین</li>
                <li>گلاب</li>
                <li>لیموی تازه</li>
              </ul>
              <ul className="child:my-4">
                <li>مقدار مورد نیاز</li>
                <li>1 قاشق چایخوری</li>
                <li>1 قاشق چایخوری</li>
                <li>1 قاشق چایخوری</li>
                <li>1 قاشق چایخوری</li>
                <li>یک عدد</li>
              </ul>
            </div>
            <p className="text-sm xl:text-base leading-10">
              سیاه دانه ها را پودر کنید و سپس بقیه مواد را به آن اضافه کنید تا
              ماسک خمیری به دست آید. ماسک را روی جوش هایتان بمالید و به آرامی
              حدود پنج دقیقه ماساژ دهید. بعد از خشک شدن خمیر آن را با آب گرم
              بشویید.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              بهترین روغن سیاه دانه
            </h2>
            <p className="text-sm xl:text-base leading-10">
              بهترین روغن سیاه دانه باید با استفاده از پرس سرد تهیه شده باشد تا
              ترکیبات طبیعی و مواد مغذی آن حفظ گردد. روغن به دست آمده با این روش
              حاوی ویتامین های B1، B2، B3 و آنتی اکسیدان است که می تواند به
              عنوان خوراکی در سالاد هم استفاده شود. این فراورده خواصی چون بهبود
              سیستم ایمنی، کاهش التهابات، بهبود سلامت قلب و عروق، کاهش سطح قند
              خون و کاهش نفخ و درد شکمی دارد.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">
              سوالات متداول سیاه دانه برای جوش صورت
            </h2>
            <h3 className="text-primryCream text-lg">
              آیا روغن سیاه دانه پوست را سیاه می کند؟
            </h3>
            <p className="text-sm xl:text-base leading-10">
              خیر، این روغن گرچه تیره رنگ است ولی باعث سیاه شدن پوست به هیچ وجه
              نمی شود.
            </p>
            <h3 className="text-primryCream text-lg">
              روغن سیاه دانه برای چه پوستی مناسب است؟
            </h3>
            <p className="text-sm xl:text-base leading-10">
              روغن سیاه دانه مناسب استفاده برای تمامی انواع پوست هست؛ ولی در
              استفاده زیاد از آن برای پوست های چرب بهتر است احتیاط نمایید.
            </p>
            <h3 className="text-primryCream text-lg">
              آیا می توان روغن سیاه دانه را با سایر محصولات مراقبت پوست ترکیب
              نمود؟
            </h3>
            <p className="text-sm xl:text-base leading-10">
              بله، شما می توانید چند قطره روغن سیاه دانه را به محصولات مراقبی
              پوست همچون ماسک یا مرطوب کننده اضافه و استفاده نمایید. در این صورت
              از خواص فوق العاده این فرآورده طبیعی نیز بهره مند خواهید شد.
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl text-primryCream py-3">نتیجه گیری</h2>
            <p className="text-sm xl:text-base leading-10">
              سیاه دانه میوه یک گیاه کوچک و گل‌ دار است که علاوه بر تقویت سیستم
              ایمنی بدن انواع التهابات را هم کاهش می دهد. به همین خاطر سیاه دانه
              برای جوش صورت نیز به کار می رود. روغن این گیاه با توجه به خصوصیات
              ضد باکتریایی اش می‌تواند انواع آکنه از قبیل بلغمی، سرسیاه و چرکی
              را درمان کند. باتوجه به این که نوع پوست شما معمولی، خشک یا چرب است
              روش های تهیه ماسک مناسب برای درمان آکنه با هم فرق می کند. بهترین
              روغن سیاه دانه باید با استفاده از پرس سرد تهیه شده باشد تا ترکیبات
              طبیعی و مواد مغذی آن حفظ گردد.
            </p>
            <p className="text-sm xl:text-base leading-10">
              شما میتوانید با مراجعه به وبسایت{" "}
              <Link href={"/"} className="font-bold text-primryGreen2">
                خرید لوازم آرایشی خارجی
              </Link>{" "}
              کاج شاپ جدیدترین و بهترین لوازم آرایشی را مشاهده و اقدام به خرید
              نمایید.
            </p>
          </div>
        </div>
        {/* view and date */}
        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center gap-x-2">
            <div className="text-xl xs:text-2xl text-primryCream">
              <TbEyeExclamation />
            </div>
            <div className="text-primryGray text-sm xs:text-base">23</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-primryGray text-sm xs:text-base">1403/03/22</div>
            <div className="text-xl xs:text-2xl text-primryCream">
              <SlCalender />
            </div>
          </div>
        </div>
        {/* share and num comment */}
        <div className="flex items-center justify-between mt-10 text-primryGray">
          {/* comment num */}
          <div className="flex items-center gap-x-2">
            <div className="text-2xl xs:text-3xl">
              <TfiCommentAlt />
            </div>
            <div className="text-primryGray">0</div>
          </div>
          {/* share */}
          <div className="text-2xl xs:text-3xl">
            <GoShareAndroid />
          </div>
        </div>
        {/* for comment */}
        <div className="mt-16 flex flex-col justify-center items-center">
          <h2 className="flex items-center text-2xl gap-x-2 text-primryCream font-bold">
            <img src="../../images/Icon/Capture1.png" alt="" />
            فرم ارسال نظر
            <img src="../../images/Icon/Capture1.png" alt="" />
          </h2>
          <form action="" className="flex flex-col items-center w-full mt-5 child:my-4">
            <input className="w-[90%] xs:w-[60%] outline-none" type="text" placeholder="عنوان نظر"/>
            <textarea className="w-[90%] xs:w-[60%] h-32 outline-none" name="" id="" placeholder="متن نظر شما"></textarea>
            <button className="w-[90%] xs:w-[60%] bg-primryCream2 text-base xs:text-lg text-white rounded-lg py-2 xs:py-3">ارسال نظر</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
