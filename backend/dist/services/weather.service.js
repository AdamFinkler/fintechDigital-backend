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
exports.weatherService = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils/utils");
const weatherService = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const isInputValid = (0, utils_1.getIsInputValid)(city);
    if (!isInputValid)
        throw new Error("Empty input provided");
    const fullUrl = (0, utils_1.getApiUrl)(city);
    try {
        const apiRes = yield axios_1.default.get(fullUrl);
        return { ok: true, data: (0, utils_1.extractInfoFromResponse)(apiRes.data) };
    }
    catch (e) {
        throw new Error(`Could not fetch data from the external API - ${e.message}`);
    }
});
exports.weatherService = weatherService;
