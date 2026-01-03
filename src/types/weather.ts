export interface IForecastDay {
  date: string;
  code: number;
  max: number;
  min: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precip: number;
}

export interface IWeather {
  location: string;
  forecast: IForecastDay[];
  hourly: {
    time: string;
    temp: number;
  }[];
}

export interface IHourlyData {
  time: string;
  temp: number;
}
