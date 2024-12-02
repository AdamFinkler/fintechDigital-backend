import { Request, Response, NextFunction } from "express";

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).send({
    ok: false,
    message: err.message,
  });
};

export default errorHandler;
