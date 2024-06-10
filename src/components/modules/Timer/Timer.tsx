"use client";
import React, { useEffect, useState } from "react";

type TimerProps = {
  time: number | undefined;
};

function Timer({ time }: TimerProps) {
  const [hour, setHour] = useState<number | undefined>(time);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  if (hour) {
    useEffect(() => {
      const timeHandler = setInterval(() => {
        if (hour == 0) {
          setMin(0);
          setSec(0);
        }
        setSec((prev) => prev - 1);
        if (sec <= 0) {
          setMin((prev) => prev - 1);
          setSec(60);
          if (min === 0) {
            setHour((prev) => prev! - 1);
            setMin(60);
          }
        }
      }, 1000);

      return () => clearInterval(timeHandler);
    }, [sec]);
  }
  return (
    <>
      {/* timer */}
      <div className="flex gap-x-1 xl:gap-x-5">
        {/* h */}
        {hour === 0 ? (
          <h2 className="text-primryCream2 font-bold text-sm">انقضا تخفیف تمام شده است</h2>
        ) : (
          <>
            <div>{sec}</div>:<div>{min}</div>:{/* s */}
            <div>{hour}</div>
            {/* m */}
          </>
        )}
      </div>
    </>
  );
}

export default Timer;
