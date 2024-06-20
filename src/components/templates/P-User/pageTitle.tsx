import Link from "next/link";
import React from "react";

type PageTitleProps = {
  title: string;
  link?: string;
  textlink?: string;
};

function PageTitle({ title, link, textlink }: PageTitleProps) {
  return (
    <div className="relative py-5">
      <h2 className="relative inline text-2xl mr-10 z-20 font-bold px-2 bg-white text-black">
        {title}
      </h2>
      <div className="absolute top-[50%] w-full h-0.5 bg-primryCream"></div>
      {link ? (
        <Link
          href={link}
          className="absolute left-5 inline z-20 bg-white py-1.5 px-1 border border-primryCream2 rounded-xl text-primryCream2"
        >
          {textlink}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default PageTitle;
