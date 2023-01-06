import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import { AppError } from "../errors/AppError";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError('Token missing!', 401)

  const [_, token] = authHeader.split(' ') // Baerer token

  try {
    verify(token, auth.SECRET_TOKEN)
  } catch {
    throw new AppError('Invalid Token', 401)
  }

  next()

}