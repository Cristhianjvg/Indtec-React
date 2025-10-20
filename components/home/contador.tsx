"use client";

import { useEffect, useState } from "react";

export function Contador() {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 16,
    minutes: 23,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="absolute bottom-30 left-0 right-0 py-6 md:py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 sm:gap-10 flex-wrap">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Minutos" />
          <TimeBox value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-[#ff6b35] text-white rounded-lg p-3 sm:p-4 md:p-6 min-w-[70px] sm:min-w-[90px] md:min-w-[100px] text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs sm:text-sm mt-1">{label}</div>
    </div>
  );
}
