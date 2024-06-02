import { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { CustomError } from '../classes';
import { forbiddenError, generalError } from '../utils/errorResponse';
import { TOO_MANY_REQS } from '../constants';

export const validateSchema =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(422).json({ message: error?.details[0].message });
    } else {
      next();
    }
  };

export const checkApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = process.env.API_KEY as string;

    if (!req.headers.apikey || req?.headers?.apikey !== apiKey) {
      return res.status(401).json(forbiddenError());
    }

    return next();
  } catch (error: any) {
    return res.status(500).json(generalError(error));
  }
};

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (error instanceof CustomError) {
    statusCode = error.status_code;
    message = error.message;
  }

  res.status(statusCode).json({ message });
};

export const rateLimitter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 40,
  handler: (req, res) => {
    return res.status(429).json({ message: TOO_MANY_REQS });
  },
});
