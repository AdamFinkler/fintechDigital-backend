"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherRouter = void 0;
const express_1 = require("express");
const error_handler_1 = __importDefault(require("../middlewares/error-handler"));
const weather_service_1 = require("../services/weather.service");
exports.weatherRouter = (0, express_1.Router)();
exports.weatherRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city } = req.query;
        const weatherResponse = yield (0, weather_service_1.weatherService)(city);
        return res.json(weatherResponse);
    }
    catch (e) {
        next(e);
    }
}), error_handler_1.default);
