import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchWeather } from "../services/weatherServices";
import type { IWeather } from "../types/weather";

interface WeatherState {
  weather: IWeather | null;
  loading: boolean;
  error: string | null;
  selectedDay: number;
  query: string;
  history: string[];
  // Actions
  setQuery: (query: string) => void;
  setSelectedDay: (day: number) => void;
  search: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      weather: null,
      loading: false,
      error: null,
      selectedDay: 0,
      query: "",
      history: [],

      setQuery: (query) => set({ query }),
      setSelectedDay: (selectedDay) => set({ selectedDay }),

      search: async (city) => {
        if (!city.trim()) return;

        set({ loading: true, error: null });

        try {
          const data = await fetchWeather(city);
          set((state) => ({
            weather: data,
            selectedDay: 0,
            history: Array.from(new Set([city, ...state.history])).slice(0, 5),
            loading: false,
          }));
        } catch (err) {
          set({
            error: err instanceof Error ? err.message : "Ошибка",
            loading: false,
          });
        }
      },
    }),
    { name: "weather-storage" },
  ),
);
