import dontenv from "dotenv";
import IApiResponse from "../common-types/ApiResponse.interface";

dontenv.config();

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export const getIsInputValid = (input: any) => {
  return Boolean(input.trim().length);
};

export const getApiUrl = (location: string) => {
  return `${baseUrl}${apiKey}&q=${location}&aqi=yes`;
};

export const extractInfoFromResponse = (res: IApiResponse) => {
  const location = res.location;
  const current = res.current;
  const currentHour = new Date(current.last_updated).getHours();

  const forecastByHour = res.forecast.forecastday[0].hour
    .filter((item) => {
      const forecastHour = new Date(item.time).getHours();
      return forecastHour >= currentHour - 3 && forecastHour <= currentHour + 1;
    })
    .map((item) => {
      const forecastTime = new Date(item.time);
      return {
        time: forecastTime.toLocaleTimeString(),
        temp_c: item.temp_c,
      };
    });
  return {
    location: {
      name: location.name,
      country: location.country,
      lat: location.lat,
      lon: location.lon,
    },
    current: {
      last_updated_epoch: current.last_updated_epoch,
      last_updated: current.last_updated,
      temp_c: current.temp_c,
      condition: {
        text: current.condition.text,
      },
      wind_kph: current.wind_kph,
      precip_mm: current.precip_mm,
      humidity: current.humidity,
    },
    forecast: forecastByHour,
  };
};
