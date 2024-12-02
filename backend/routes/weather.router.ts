import { NextFunction, Request, Response, Router } from "express";
import errorHandler from "../middlewares/error-handler";
import { weatherService } from "../services/weather.service";

export const weatherRouter = Router();

weatherRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const { city } = req.query;

      const weatherResponse = await weatherService(city as string);

      return res.json(weatherResponse);
    } catch (e) {
      next(e);
    }
  },
  errorHandler
);
