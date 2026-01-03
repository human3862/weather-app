import { WeatherIcon } from "../UI/WeatherIcon";
import type { IWeather, IForecastDay } from "../../types/weather";

interface CurrentWeatherProps {
  weather: IWeather;
  activeDay: IForecastDay;
}

export const CurrentWeather = ({ weather, activeDay }: CurrentWeatherProps) => (
  <div className="flex justify-between items-start bg-neutral-800 p-8 rounded-3xl border border-white/5">
    <div>
      <h2 className="text-3xl font-bold">{weather.location}</h2>
      <p className="text-slate-400 mt-1 capitalize">
        {new Date(activeDay.date).toLocaleDateString("ru-RU", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </p>
    </div>
    <div className="text-right">
      <WeatherIcon code={activeDay.code} className="size-20 ml-auto" />
      <span className="text-5xl font-black block mt-2">
        {Math.round(activeDay.max)}°C
      </span>
    </div>
  </div>
);
