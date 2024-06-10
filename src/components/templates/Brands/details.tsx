"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BsCaretRight } from "react-icons/bs";
import Link from "next/link";

function Details() {
  const [select, setSelect] = useState<string>("A-C");

  return (
    <>
      <div className="container">
        <h1 className="text-5xl font-bold text-primryCream2 py-5">
          لیست برندها
        </h1>
        {/* select part */}
        <div className="w-full flex flex-row-reverse justify-center">
          <ul className="flex flex-row-reverse items-center child:px-4 child:cursor-pointer child:flex child:flex-row-reverse child:gap-x-2 font-bold child:py-2">
            <li
              onClick={() => setSelect("A-C")}
              className={`${
                select === "A-C" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>A-C</span>
              <span
                className={`${select === "A-C" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("D-F")}
              className={`${
                select === "D-F" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>D-F</span>
              <span
                className={`${select === "D-F" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("G-I")}
              className={`${
                select === "G-I" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>G-I</span>
              <span
                className={`${select === "G-I" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("J-L")}
              className={`${
                select === "J-L" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>J-L</span>
              <span
                className={`${select === "J-L" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("M-O")}
              className={`${
                select === "M-O" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>M-O</span>
              <span
                className={`${select === "M-O" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("P-R")}
              className={`${
                select === "P-R" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>P-R</span>
              <span
                className={`${select === "P-R" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("S-U")}
              className={`${
                select === "S-U" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>S-U</span>
              <span
                className={`${select === "S-U" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("V-X")}
              className={`${
                select === "V-X" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>V-X</span>
              <span
                className={`${select === "V-X" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
            <li
              onClick={() => setSelect("Y-Z")}
              className={`${
                select === "Y-Z" &&
                " border-b-2 border-primryCream2 text-primryCream2 "
              } transition-all duration-500`}
            >
              <span>Y-Z</span>
              <span
                className={`${select === "Y-Z" ? "opacity-100" : "opacity-0"} `}
              >
                <FaCaretDown />
              </span>
            </li>
          </ul>
        </div>
        {/* more */}
        <div className="w-full flex flex-row-reverse child:flex-col py-5">
          {/* A-C */}

          <div
            className={`${select === "A-C" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* A */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">A</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ALL.NATURE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AMOUAGE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ANASTASIA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ARCANCIL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ARTDECO</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ASTRA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AVENE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AZZARO</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* B */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">B</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BABARIA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEAUTY BLENDER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEAVER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEN NYE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BENEFIT</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BEYU</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BH COSMETICS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BIO-OIL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BIODERMA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BOBBI BROWN</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>Brondi Sands</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BOURJOIS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BPERFECT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BRIGHT MAX</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BURBERRY</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BURT'S BEES</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BVLGARI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BY TERRY</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* C */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">C</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>CALVIN KLEIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CANDID</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CAROLINA HERRERA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CAUDALIE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CB</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>CHANEL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CHARLOTTE TILBURY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CHRISTOPHE ROBIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CLARINS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CLINIQUE</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>COASTALSCENT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>COLLISTAR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>COTONEVE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CREED</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CYSPERSA</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* D-F */}

          <div
            className={`${select === "D-F" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* D */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">D</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>DAHLIA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DARPHIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DAVIDOFF</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DE MARLY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DERMAGOR</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>DERMATYPIQUE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DIESEL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DIOR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DKNY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>DOLCE & GABBANA</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>DUNHILL</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* E */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">E</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ELIE SAAB</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ELIZABETH ARDEN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ELYEES FASHION</Link>
                  </li>
                  <li>
                    <Link href={"/"}>EMAX DESIGN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>EMBRYOLISSE</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>EMPERIO ARMANI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ESSENCE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ESTEE LAUDER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ETUDEHOUSE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>EUCERIN</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BURT'S BEES</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BVLGARI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BY TERRY</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* F */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">F</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>FARSALI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>FASCINELLE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>FASHION & FRAGRANCES</Link>
                  </li>
                  <li>
                    <Link href={"/"}>FENTY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>FERRARI</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>FILORGA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>FOREVER 52</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* G-I */}
          <div
            className={`${select === "G-I" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* G */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">G</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>GARNIER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GEORGES RECH</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GINAGEN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GIORGIO ARMANI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GISOU</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>GIVENCHY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GOLI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GRANVILLE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GUCCI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>GUCHINI</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>GUERLAIN</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* H */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">H</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>HAIRBURST</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HAIRTAMIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HEGOR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HELENA RUBINSTEIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HERMES</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>HOURGLASS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HUDA BEAUTY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>HUGO BOSS</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* I */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">I</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>INGLOT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>INSTITUT ESTHEDERM</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ISADORA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ISDIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ISSEY MIYAKE</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>IT COSMETICS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>IUNIK</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* J-K */}

          <div
            className={`${select === "J-L" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* J */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">J</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>J.CAT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JACKE HOPE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JACOMO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JACQUES BOGART</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JEAN PAUL GAULTIER</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>JEFFEREE STAR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JIMMY CHOO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JOHN RICHMOND</Link>
                  </li>
                  <li>
                    <Link href={"/"}>JOOP</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* K */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">K</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>KAT VON D</Link>
                  </li>
                  <li>
                    <Link href={"/"}>KENZO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>KERASTASE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>KIEHL'S</Link>
                  </li>
                  <li>
                    <Link href={"/"}>KIKO</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* L */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">L</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>L'OREAL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>L.A. GIRL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LA FARRERR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LA ROCHE-POSAY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LA-PRAIRIE</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>LABEL.M</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LACOSTE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LALIQUE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LAMER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LANCOME</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>LANEIGE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LANVIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LAURA MERCIER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LAUREATE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LEILA HATAMI</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>LEYLA MILANI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LIA VITO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LIERAC</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LIU JO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LOCCITANE</Link>
                  </li>
                </ul>{" "}
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>LOEWE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>LUMENE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* M-O */}

          <div
            className={`${select === "M-O" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* M */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">M</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>MAC</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MAKE UP FOR EVER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MANILA GRACE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MANUCURIST</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MARCE JACOBS</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>MARC JOSEPH</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MATILDA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MAUBOUSSIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MAUI MOISTURE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MAVALA</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>MAXFACTOR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MAYBELLINE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MERCEDES BENZ</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MISSONI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MONT BLANC</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>MORPHE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MOSCHINO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MQ</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MUGLER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MURAD</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>MUSTELA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>MY VITAMINS</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* N */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">N</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>NARCISO RODRIGUEZ</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NARS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NASOMATTO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NATASHA DENONA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NEUTROGENA</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>NINA RICCI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NOREVA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NORTHFIELDS.TAILORS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NUXE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>NYX</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* O */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">O</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>OFRA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>OGX</Link>
                  </li>
                  <li>
                    <Link href={"/"}>OLE HENRIKSEN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ORDINARY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ORIGINS</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ORLANE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* P-R */}

          <div
            className={`${select === "P-R" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* P */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">P</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>P.LOUISE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PACO RABANNE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PACOROCA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PAT MCGRATH LABS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PETAL FRESH</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>PHYTO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PIPPA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PIXI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>POLICE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>PRIME</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>PRIME COLLECTION</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Q */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">Q</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>QV</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* R */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">R</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>RALPH LAUREN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>REAL TECHNIQUE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>REPLIKA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>REVLON</Link>
                  </li>
                  <li>
                    <Link href={"/"}>REVOLUTION</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ROBERTO CAVALLI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ROBERTO VIZZAARI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ROC</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* S-U */}

          <div
            className={`${select === "S-U" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* S */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">S</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ALL.NATURE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AMOUAGE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ANASTASIA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ARCANCIL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ARTDECO</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ASTRA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AVENE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>AZZARO</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* T */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">T</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BABARIA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEAUTY BLENDER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEAVER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BEN NYE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BENEFIT</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BEYU</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BH COSMETICS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BIO-OIL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BIODERMA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BOBBI BROWN</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>Brondi Sands</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BOURJOIS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BPERFECT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BRIGHT MAX</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BURBERRY</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>BURT'S BEES</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BVLGARI</Link>
                  </li>
                  <li>
                    <Link href={"/"}>BY TERRY</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* U */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">U</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>CALVIN KLEIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CANDID</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CAROLINA HERRERA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CAUDALIE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CB</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>CHANEL</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CHARLOTTE TILBURY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CHRISTOPHE ROBIN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CLARINS</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CLINIQUE</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>COASTALSCENT</Link>
                  </li>
                  <li>
                    <Link href={"/"}>COLLISTAR</Link>
                  </li>
                  <li>
                    <Link href={"/"}>COTONEVE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CREED</Link>
                  </li>
                  <li>
                    <Link href={"/"}>CYSPERSA</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* V-X */}

          <div
            className={`${select === "V-X" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* V */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">V</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>VALENTINO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>VERONIQUE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>VERSACE</Link>
                  </li>
                  <li>
                    <Link href={"/"}>VICHY</Link>
                  </li>
                  <li>
                    <Link href={"/"}>VICTORY & ROLF</Link>
                  </li>
                </ul>
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>VICTORIA'S SECRET</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* W */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">W</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>WELLA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>WET N WILD</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* X */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">X</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>XERJOFF</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Y-Z */}

          <div
            className={`${select === "Y-Z" ? "fadein_anime flex" : "hidden"}`}
          >
            {/* Y */}
            <div className="flex flex-col">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">Y</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>YORN</Link>
                  </li>
                  <li>
                    <Link href={"/"}>YVES ROCHER</Link>
                  </li>
                  <li>
                    <Link href={"/"}>YVES SAINT LAURENT</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Z */}
            <div className="mt-3">
              {/* logo */}
              <div className="flex flex-row-reverse items-center gap-x-3">
                <div className="text-2xl text-primryCream2">
                  <BsCaretRight />
                </div>
                <div className="text-4xl font-bold">Z</div>
              </div>
              {/* links */}
              <div className="w-full flex flex-row-reverse flex-wrap gap-x-56 mt-3">
                <ul className="child:w-full child:flex child:justify-end child:mb-1 mt-4">
                  <li>
                    <Link href={"/"}>ZIPPO</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ZOEVA</Link>
                  </li>
                  <li>
                    <Link href={"/"}>ZOYA</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
