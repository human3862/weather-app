import { useState, useCallback, useMemo } from "react";
import { fetchWeather } from "../services/weatherServices";
import type { IWeather, IForecastDay } from "../types/weather";

export const useWeather = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [query, setQuery] = useState("");

  const search = useCallback(async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(query);
      setWeather(data);
      setSelectedDay(0);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Ошибка";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const activeDay = useMemo((): IForecastDay | undefined => {
    return weather?.forecast?.[selectedDay];
  }, [weather, selectedDay]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSelectedDay(0);
    search(query);
  };

  return {
    weather,
    loading,
    error,
    search,
    selectedDay,
    setSelectedDay,
    activeDay,
    query,
    setQuery,
    handleSearch,
  };
};
