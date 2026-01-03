import { CurrentWeather } from "../components/Weather/CurrentWeather";
import { HourlyForecast } from "../components/Weather/HourlyForecast";
import { DailyForecast } from "../components/Weather/DailyForecast";
import { MetricsCards } from "./Weather/MetricsCards";
import type { IForecastDay, IWeather } from "../types/weather";

interface MainProps {
  weather?: IWeather;
  activeDay?: IForecastDay;
  selectedDay: number;
  setSelectedDay: (index: number) => void;
}

export const Main = ({
  weather,
  activeDay,
  selectedDay,
  setSelectedDay,
}: MainProps) => {
  const filteredHourlyData =
    weather?.hourly.filter((hour) => {
      const hourDate = hour.time.split(" ")[0] || hour.time.split("T")[0];
      return hourDate === activeDay?.date;
    }) || [];
  return (
    <>
      {weather && activeDay && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div className="lg:col-span-2 space-y-8">
            <CurrentWeather weather={weather} activeDay={activeDay} />
            <MetricsCards activeDay={activeDay} />
            <HourlyForecast hourly={filteredHourlyData} />
          </div>

          <DailyForecast
            forecast={weather.forecast}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>
      )}
    </>
  );
};
