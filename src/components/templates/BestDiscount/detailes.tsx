import DiscountBox from "@/components/modules/DiscountBox/DiscountBox";
import React from "react";

function Detailes() {
  let productsNews = [
    {
      id: 1,
      title: "مرطوب کننده بیوتی اسکین (پوست چرب)",
      bgColor: [],
      price: 163_000,
      discount: 15,
      img: "../images/NewsProducts/Capture1.jpg",
    },
    {
      id: 2,
      title: "سرم ویتامین سی بیوتی اسکین",
      bgColor: [],
      price: 263000,
      discount: 15,
      img: "../images/NewsProducts/Capture2.jpg",
    },
    {
      id: 3,
      title: "رژ لب مات مادام استلو آسترا",
      bgColor: ["#A21E26", "#B72A44", "#BA444D"],
      price: 732_000,
      discount: 15,
      img: "../images/NewsProducts/Capture3.jpg",
    },
    {
      id: 4,
      title: "برق لب حجم دهنده و شاین دار آسترا",
      bgColor: ["#BE776C", "#EC8D7D", "#D98A80", "#DC8F86", "#F0B1B6"],
      price: 699_000,
      discount: 15,
      img: "../images/NewsProducts/Capture4.jpg",
    },
    {
      id: 5,
      title: "رژگونه و هایلایتر پت مک گرث",
      bgColor: [],
      price: 5_500_000,
      discount: 15,
      img: "../images/NewsProducts/Capture5.jpg",
    },
    {
      id: 6,
      title: "سرم سالسیلیک اسید اینکی لیست",
      bgColor: [],
      price: 1_159_000,
      discount: 15,
      img: "../images/NewsProducts/Capture6.jpg",
    },
    {
      id: 7,
      title: "ضد افتاب فیوژن واتر جت مجیک رنگیایزدین",
      bgColor: ["#EACCB4"],
      price: 1_750_000,
      discount: 15,
      img: "../images/NewsProducts/Capture7.jpg",
    },
    {
      id: 8,
      title: "ماسک مو نانو پروتئین پلاتلی",
      bgColor: [],
      price: 1_590_000,
      discount: 15,
      img: "../images/NewsProducts/Capture8.jpg",
    },
    {
      id: 9,
      title: "پنکیک پیپا",
      bgColor: ["#B78564", "#BE8D6D", "#C99C7F", "#D3A78A"],
      price: 995_000,
      discount: 15,
      img: "../images/NewsProducts/Capture9.jpg",
    },
    {
      id: 10,
      title: "سرم ترمیم کننده بیوتی تسکین",
      bgColor: [],
      price: 275_000,
      discount: 15,
      img: "../images/NewsProducts/Capture10.jpg",
    },
  ];
  return (
    <div className="container grid grid-cols-2 sm:grid-cols-3 gap-3 xl:grid-cols-4 mb-8">
      {productsNews.map((product) => (
        <DiscountBox key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Detailes;
