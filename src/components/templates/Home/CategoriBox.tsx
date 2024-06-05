import React from "react";
import Link from "next/link";

type ItemProps={
    id:number,
    title:string,
    img:string,
    link:string,
}

function CategoriBox({id,title,img,link}:ItemProps) {
  return (
    <>
      <Link className="flex group flex-col items-center w-full h-fit" href={link}>
        <img className="w-full h-full" src={img} alt="" />
        <p className="font-bold py-4 w-full text-center group-hover:bg-primryCream/70 delay-300 transition-all duration-300">{title}</p>
      </Link>
    </>
  );
}

export default CategoriBox;
