import NavBar from "@/components/modules/NavBar/NavBar";
import Special from "@/components/templates/Home/Special";
import connectToDB from "../../configs/db";
import Categories from "@/components/templates/Home/Categories";
import NewsProducts from "@/components/templates/Home/NewsProducts";
import SpecialMain from "@/components/templates/Home/SpecialMain";
import Favandmostsell from "@/components/templates/Home/Favandmostsell";
import BannerServices from "@/components/templates/Home/BannerServices";
import Articles from "@/components/templates/Home/Articles";
import Companies from "@/components/templates/Home/Companies";
import Footer from "@/components/modules/Footer/Footer";

export default function Home() {

  // data
  let productsNews = [
    {
      id: 1,
      title: "مرطوب کننده بیوتی اسکین (پوست چرب)",
      bgColor: [],
      price: 163_000,
      img: "./images/NewsProducts/Capture1.jpg",
    },
    {
      id: 2,
      title: "سرم ویتامین سی بیوتی اسکین",
      bgColor: [],
      price: 263000,
      img: "./images/NewsProducts/Capture2.jpg",
    },
    {
      id: 3,
      title: "رژ لب مات مادام استلو آسترا",
      bgColor: ["#A21E26", "#B72A44", "#BA444D"],
      price: 732_000,
      img: "./images/NewsProducts/Capture3.jpg",
    },
    {
      id: 4,
      title: "برق لب حجم دهنده و شاین دار آسترا",
      bgColor: ["#BE776C", "#EC8D7D", "#D98A80", "#DC8F86", "#F0B1B6"],
      price: 699_000,
      img: "./images/NewsProducts/Capture4.jpg",
    },
    {
      id: 5,
      title: "رژگونه و هایلایتر پت مک گرث",
      bgColor: [],
      price: 5_500_000,
      img: "./images/NewsProducts/Capture5.jpg",
    },
    {
      id: 6,
      title: "سرم سالسیلیک اسید اینکی لیست",
      bgColor: [],
      price: 1_159_000,
      img: "./images/NewsProducts/Capture6.jpg",
    },
    {
      id: 7,
      title: "ضد افتاب فیوژن واتر جت مجیک رنگیایزدین",
      bgColor: ["#EACCB4"],
      price: 1_750_000,
      img: "./images/NewsProducts/Capture7.jpg",
    },
    {
      id: 8,
      title: "ماسک مو نانو پروتئین پلاتلی",
      bgColor: [],
      price: 1_590_000,
      img: "./images/NewsProducts/Capture8.jpg",
    },
    {
      id: 9,
      title: "پنکیک پیپا",
      bgColor: ["#B78564", "#BE8D6D", "#C99C7F", "#D3A78A"],
      price: 995_000,
      img: "./images/NewsProducts/Capture9.jpg",
    },
    {
      id: 10,
      title: "سرم ترمیم کننده بیوتی تسکین",
      bgColor: [],
      price: 275_000,
      img: "./images/NewsProducts/Capture10.jpg",
    },
  ];
  let articles = [
    {
      id: 1,
      img: "./images/Articles/Capture1.jpg",
      title: "شیلد لب چیست(مراحل آن ونکات مهم)",
      desc: "	برای پاسخ به سوال شید لب چیست باید گفت سایه شیدینگ لب یکی از عمل های زیبایی سرپایی است که در آن با استفاده از سوزن...",
      createdAt: "1403/02/27",
      views: "1900",
      link:"/"
    },
    {
      id: 2,
      img: "./images/Articles/Capture2.jpg",
      title: "روش تهیه ماسک برنج برای چروک صورت",
      desc: "یکی از روش های خانگی برای جوانسازی پوست، استفاده از ماسک برنج برای چروک صورت است که اثرات فوق العاده ای دارد. شما می توانید از...",
      createdAt: "1403/02/26",
      views: "25533",
      link:"/"
    },
    {
      id: 3,
      img: "./images/Articles/Capture3.jpg",
      title: "معرفی بهترین ادکلن سرد و تلخ زنانه",
      desc: "اگر به دنبال عطری جذاب و خاص برای فصل بهار و تابستان هستید، باید گزینه ای با ترکیبی از نت های مرکباتی و گلی را انتخاب...",
      createdAt: "1403/02/25",
      views: "126",
      link:"/"
    },
    {
      id: 4,
      img: "./images/Articles/Capture4.jpg",
      title: "معرفی ادکلن برای افراد سیگاری",
      desc: "بوی سیگار زننده و رایحه آن نیز سرد است؛ این دو خصوصیت علاوه بر آزار اطرافیان در آنان حس افسردگی هم ایجاد می کند. به همین",
      createdAt: "1403/03/02",
      views: "29",
      link:"/"
    },
    {
      id: 5,
      img: "./images/Articles/Capture5.jpg",
      title: "انواع طبع عطر و تناسب آنها با مزاج افراد",
      desc: "استفاده از عطری ناهمگون با طبع شما روی سلامتی و رفتارتان اثر می گذارد. یک فرد گرم‌ مزاج با استشمام رایحه گرم سردرد می گیرد و...",
      createdAt: "1403/03/01",
      views: "64",
      link:"/"
    },
    {
      id: 6,
      img: "./images/Articles/Capture6.jpg",
      title: "معرفی بهترین ریمل ضد حساسیت چشم و نکات کلیدی در انتخاب",
      desc: "اگر چشمان حساسی دارید و با استفاده از ریمل های مختلف، احساس التهاب یا خارش را تجربه کرده اید، بهتر است در انتخاب محصول سازگار با...",
      createdAt: "1403/02/31",
      views: "100",
      link:"/"
    },
  ];
  let companies=[
    {id:1,img:"./images/Companies/Capture1.jpg",link:"/"},
    {id:2,img:"./images/Companies/Capture2.jpg",link:"/"},
    {id:3,img:"./images/Companies/Capture3.jpg",link:"/"},
    {id:4,img:"./images/Companies/Capture4.jpg",link:"/"},
    {id:5,img:"./images/Companies/Capture5.jpg",link:"/"},
    {id:6,img:"./images/Companies/Capture6.jpg",link:"/"},
    {id:7,img:"./images/Companies/Capture7.jpg",link:"/"},
    {id:8,img:"./images/Companies/Capture8.jpg",link:"/"},
    {id:9,img:"./images/Companies/Capture9.jpg",link:"/"},
  ]
  let productsSpecial = [
    {
      id: 1,
      title: "ضد افتاب بی رنگ آکوا فیوژن برایت مکس SPF50",
      shortDesc: "ضد لک و روشن کننده پوست",
      bgColor: ["bg-primryYellow/45"],
      img: "./images/Special/Capture1.jpg",
    },
    {
      id: 2,
      title: "رژ لب مات انوی پیپا",
      shortDesc: "حاوی ویتامین E و دارای ماندگاری طولانی",
      bgColor: ["bg-primryRed/75"],
      img: "./images/Special/Capture2.jpg",
    },
    {
      id: 3,
      title: "محصول ایونیک",
      shortDesc: "با محصولات ایونیک پوستت رو شاداب نگه دار!",
      bgColor: ["bg-primryRed/30"],
      img: "./images/Special/Capture3.jpg",
    },
    {
      id: 4,
      title: "شامپو ضد ریزش مو سیسپرسا",
      shortDesc: "فاقد سولفات وترمیم کننده چرخه رشد طبیعی مو",
      bgColor: ["bg-primryOcean/80"],
      img: "./images/Special/Capture4.jpg",
    },
  ];
  connectToDB();
  return (
    <>
      <NavBar />
      <Special products={productsSpecial}/>
      <Categories />
      <NewsProducts products={productsNews} />
      <SpecialMain />
      <Favandmostsell products={productsNews} />
      <BannerServices />
      <Articles articles={articles}/>
      <Companies companies={companies}/>
      <Footer/>
    </>
  );
}
