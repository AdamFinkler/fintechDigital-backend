export default interface IClientResponse {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
    };
    wind_kph: number;
    precip_mm: number;
    humidity: number;
  };
  forecast: {
    time: string;
    temp_c: number;
  }[];
}
