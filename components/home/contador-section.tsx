"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Contador() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      let target = new Date(`${year}-11-27T08:00:00-05:00`);
      if (now.getTime() > target.getTime()) {
        target = new Date(`${year + 1}-11-27T08:00:00-05:00`);
      }
      return target;
    };

    const targetDate = getTargetDate();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        absolute
        left-1/2 -translate-x-1/2
        w-full
        z-20
        bottom-[12%] md:bottom-[10%] lg:bottom-[8%]
      "
      // fallback por si tailwind no genera bottom-[12%]
      style={{ bottom: "12%" }}
    >
      <div className="px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
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
    <div
      className="
        bg-[#ff6b35] text-white rounded-lg
        px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5
        text-center
        min-w-[68px] sm:min-w-[82px] md:min-w-[92px]"
    >
      <div
        className="font-bold leading-none"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="mt-1 text-[0.6rem] sm:text-xs md:text-sm">{label}</div>
    </div>
  );
}
