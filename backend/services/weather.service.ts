import axios from "axios";
import {
  extractInfoFromResponse,
  getApiUrl,
  getIsInputValid,
} from "../utils/utils";
import IServiceResult from "../common-types/ServiceResult.interface";
import IApiResponse from "../common-types/ApiResponse.interface";
import IClientResponse from "../common-types/ClientResponse.interface";

export const weatherService = async (
  city: string
): Promise<IServiceResult<IClientResponse>> => {
  const isInputValid = getIsInputValid(city);

  if (!isInputValid) throw new Error("Empty input provided");

  const fullUrl = getApiUrl(city);

  try {
    const apiRes = await axios.get(fullUrl);

    return { ok: true, data: extractInfoFromResponse(apiRes.data) };
  } catch (e: any) {
    throw new Error(
      `Could not fetch data from the external API - ${e.message}`
    );
  }
};
