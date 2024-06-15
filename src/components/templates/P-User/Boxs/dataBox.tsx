import React from "react";
import { IoStatsChart } from "react-icons/io5";

type DataBoxProps = {
  title: string;
  value: number;
};

function DataBox({ title, value }: DataBoxProps) {
  return (
    <div className="w-[300px] border-2 border-primryCream2 rounded p-2">
      {/* count */}
      <div className="font-bold font-sans">{value}</div>
      {/* info */}
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold">مجموع {title} ها</div>
          <div className="flex flex-col gap-y-1 py-3"> 
            <div className="w-[100px] h-0.5 bg-primryCream2 rounded-md"></div>
            <div className="w-[90px] h-0.5 bg-primryCream2 rounded-md"></div>
          </div>
        </div>
        <div>
          <IoStatsChart  className="text-4xl text-primryCream2"/>
        </div>
      </div>
    </div>
  );
}

export default DataBox;
