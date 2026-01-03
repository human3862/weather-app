import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

interface WeatherIconProps {
  code: number;
  className?: string;
}

export const WeatherIcon = ({
  code,
  className = "size-8",
}: WeatherIconProps) => {
  if (code === 0) return <Sun className={`${className} text-yellow-400`} />;
  if (code >= 1 && code <= 3)
    return <Cloud className={`${className} text-slate-400`} />;
  if (code >= 51 && code <= 67)
    return <CloudRain className={`${className} text-blue-400`} />;
  if (code >= 71 && code <= 77)
    return <CloudSnow className={`${className} text-blue-200`} />;
  if (code >= 95)
    return <CloudLightning className={`${className} text-indigo-500`} />;
  return <Cloud className={`${className} text-slate-500`} />;
};
