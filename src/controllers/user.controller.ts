import { NextFunction, Request, Response } from 'express';
import * as joiSchemas from '../utils/joi.schemas';
import * as UserServices from '../services/user.service';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = joiSchemas.user.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    const { code, data } = await UserServices.createUser(req.body);

    return res.status(code).json(data);
  } catch (e) {
    return next(e);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = joiSchemas.login.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    const { code, data } = await UserServices.login(req.body);

    return res.status(code).json(data);
  } catch (e) {
    return next(e);
  }
};