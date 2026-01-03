import { WeatherIcon } from "../UI/WeatherIcon";
import type { IForecastDay } from "../../types/weather";

interface DailyForecastProps {
  forecast: IForecastDay[];
  selectedDay: number;
  setSelectedDay: (index: number) => void;
}

export const DailyForecast = ({
  forecast,
  selectedDay,
  setSelectedDay,
}: DailyForecastProps) => (
  <div className="bg-neutral-800 p-6 rounded-3xl border border-white/5">
    <h3 className="text-lg font-semibold mb-6 text-slate-400">
      7-Day Forecast
    </h3>
    <div className="space-y-4">
      {forecast.map((day, index) => (
        <div
          key={day.date}
          onClick={() => setSelectedDay(index)}
          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
            selectedDay === index
              ? "bg-blue-600/20 border border-white/20"
              : "bg-neutral-700 hover:bg-white/5"
          }`}
        >
          <div className="flex items-center gap-3">
            <WeatherIcon code={day.code} className="size-6" />
            <span className="text-sm">
              {new Date(day.date).toLocaleDateString("ru-RU", {
                weekday: "short",
              })}
            </span>
          </div>
          <div className="text-sm font-medium">
            {Math.round(day.max)}° / {Math.round(day.min)}°
          </div>
        </div>
      ))}
    </div>
  </div>
);
