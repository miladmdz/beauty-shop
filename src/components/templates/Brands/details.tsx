import React from "react";
import { FaCaretDown } from "react-icons/fa";

function Details() {
  return (
    <>
      <div className="container">
        <h1 className="text-5xl font-bold text-primryCream2 py-5">
          لیست برندها
        </h1>
        <div className="w-full flex flex-row-reverse">
          <ul className="flex items-center child:px-3">
            <li>
              <span>A-C</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>D-F</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>G-I</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>J-L</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>M-O</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>P-R</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>S-U</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>V-X</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
            <li>
              <span>Y-Z</span>
              <span>
                <FaCaretDown />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Details;
