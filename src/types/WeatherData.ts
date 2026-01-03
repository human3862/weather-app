export interface WeatherHour {
  time: string;
  temp: number;
}

export interface ForecastDay {
  date: string;
  max: number;
  min: number;
  code: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precip: number;
}

export interface WeatherData {
  location: string;
  current: {
    temp: number;
    feelsLike: number;
    humidity: number;
    wind: number;
    precip: number;
    code: number;
  };
  forecast: ForecastDay[];
  hourly: WeatherHour[];
}
