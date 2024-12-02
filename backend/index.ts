import express, { Request, Response } from "express";
import cors from "cors";
import { weatherRouter } from "./routes/weather.router";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/weather", weatherRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
