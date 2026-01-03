import { MetricCard } from "../UI/MetricCard";
import { Wind, Droplets, Thermometer, CloudRain } from "lucide-react";
import type { IForecastDay } from "../../types/weather";

interface MetricsCardsProps {
  activeDay: IForecastDay;
}

export const MetricsCards = ({ activeDay }: MetricsCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      <MetricCard
        icon={<Thermometer className="size-4" />}
        label="Feels Like"
        value={`${Math.round(activeDay.feelsLike)}°`}
      />
      <MetricCard
        icon={<Droplets className="size-4" />}
        label="Humidity"
        value={`${Math.round(activeDay.humidity)}%`}
      />
      <MetricCard
        icon={<Wind className="size-4" />}
        label="Wind"
        value={`${activeDay.wind} km/h`}
      />
      <MetricCard
        icon={<CloudRain className="size-4" />}
        label="Precip"
        value={`${activeDay.precip} mm`}
      />
    </div>
  );
};
