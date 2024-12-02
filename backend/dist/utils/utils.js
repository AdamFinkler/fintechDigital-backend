"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractInfoFromResponse = exports.getApiUrl = exports.getIsInputValid = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
const getIsInputValid = (input) => {
    return Boolean(input.trim().length);
};
exports.getIsInputValid = getIsInputValid;
const getApiUrl = (location) => {
    return `${baseUrl}${apiKey}&q=${location}&aqi=yes`;
};
exports.getApiUrl = getApiUrl;
const extractInfoFromResponse = (res) => {
    const location = res.location;
    const current = res.current;
    const forecast = res.forecast;
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
        forecast,
    };
};
exports.extractInfoFromResponse = extractInfoFromResponse;
