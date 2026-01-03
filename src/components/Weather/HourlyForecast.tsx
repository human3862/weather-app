import { useRef } from "react";
import type { IHourlyData } from "../../types/weather";

interface HourlyForecastProps {
  hourly: IHourlyData[];
}

export const HourlyForecast = ({ hourly }: HourlyForecastProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    const startX = e.pageX - el.offsetLeft;
    const scrollLeft = el.scrollLeft;

    const onMouseMove = (ev: MouseEvent) => {
      const x = ev.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="mt-8 bg-neutral-800 p-6 rounded-3xl border border-white/5">
      <h3 className="text-sm font-semibold mb-4 text-slate-400 uppercase tracking-wider">
        Hourly Forecast
      </h3>
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none scroll-smooth touch-pan-x 
                   [&::-webkit-scrollbar]:h-1.5 
                   [&::-webkit-scrollbar-track]:bg-neutral-800 
                   [&::-webkit-scrollbar-thumb]:bg-neutral-600 
                   [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {hourly.map((hour) => (
          <div
            key={hour.time}
            className="flex flex-col items-center min-w-13.75 shrink-0"
          >
            <span className="text-xs text-slate-400 mb-2 pointer-events-none">
              {new Date(hour.time).toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className="text-lg font-bold pointer-events-none">
              {Math.round(hour.temp)}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
