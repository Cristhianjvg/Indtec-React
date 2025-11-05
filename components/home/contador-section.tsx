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
    // función para obtener la próxima fecha 27 de noviembre 08:00 (-05:00 Guayaquil)
    const getTargetDate = () => {
      const now = new Date();
      const year = now.getFullYear();

      // 27 de noviembre a las 08:00 en Guayaquil (UTC-05:00)
      // usamos la ISO con offset -05:00 para que no se desplace
      let target = new Date(`${year}-11-27T08:00:00-05:00`);

      // si ya pasó este año, usamos el próximo
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
        // llegó a cero
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
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
    <section className="absolute bottom-30 left-0 right-0 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 flex-wrap">
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
