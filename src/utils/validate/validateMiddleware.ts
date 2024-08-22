import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { requestResponse } from "../../types/responseTypes"
const validateMiddleware = (req: Request, res: Response, next: NextFunction):Response<requestResponse> | void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status:"failed",
      statusCode:400,
      message:"validation error occur",
      data:errors.array()
  });
  }
  next();
};

export default validateMiddleware;
