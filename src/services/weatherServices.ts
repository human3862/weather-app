import type { IWeather } from "../types/weather";

const GEO_API_URL = "https://nominatim.openstreetmap.org/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export const fetchWeather = async (city: string): Promise<IWeather> => {
  const geoRes = await fetch(
    `${GEO_API_URL}?q=${encodeURIComponent(city)}&format=json&limit=1`
  );
  const geoData = await geoRes.json();
  if (!geoData?.length) throw new Error("City not found");

  const { lat, lon, display_name: location } = geoData[0];

  const wRes = await fetch(
    `${WEATHER_API_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,relative_humidity_2m_max,wind_speed_10m_max,precipitation_sum&hourly=temperature_2m&timezone=auto`
  );
  const data = await wRes.json();

  return {
    location: location.split(",")[0],
    forecast: data.daily.time.map((t: string, i: number) => ({
      date: t,
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
      code: data.daily.weather_code[i],
      feelsLike: data.daily.apparent_temperature_max[i],
      humidity: data.daily.relative_humidity_2m_max[i],
      wind: data.daily.wind_speed_10m_max[i],
      precip: data.daily.precipitation_sum[i],
    })),
    hourly:
      data.hourly?.time.map((t: string, i: number) => ({
        time: t,
        temp: data.hourly.temperature_2m[i],
      })) || [],
  };
};
