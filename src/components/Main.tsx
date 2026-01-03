import { CurrentWeather } from "../components/Weather/CurrentWeather";
import { HourlyForecast } from "../components/Weather/HourlyForecast";
import { DailyForecast } from "../components/Weather/DailyForecast";
import { MetricsCards } from "./Weather/MetricsCards";
import type { IForecastDay, IWeather } from "../types/weather";
import { useMemo } from "react";

interface MainProps {
  weather?: IWeather;
  activeDay?: IForecastDay;
  selectedDay: number;
  setSelectedDay: (index: number) => void;
}

export const Main = ({ weather, selectedDay, setSelectedDay }: MainProps) => {
  const activeDay = weather?.forecast[selectedDay];
  const filteredHourlyData = useMemo(() => {
    const hourly = weather?.hourly;
    const targetDate = activeDay?.date?.slice(0, 10);

    if (!hourly || !targetDate) return [];

    return hourly.filter((hour) => {
      return hour.time?.slice(0, 10) === targetDate;
    });
  }, [weather?.hourly, activeDay?.date]);
  return (
    <>
      {weather && activeDay && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div className="lg:col-span-2 space-y-8">
            <CurrentWeather weather={weather} activeDay={activeDay} />
            <MetricsCards activeDay={activeDay} />
            {filteredHourlyData.length > 0 ? (
              <HourlyForecast hourly={filteredHourlyData} />
            ) : null}
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
