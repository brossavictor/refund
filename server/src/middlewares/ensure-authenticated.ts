import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";

interface TokenPayload {
  role: string;
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new AppError("Token not found.", 401);
    }
    const [, token] = authHeader.split(" ");

    const { role, sub: user_id } = verify(token, authConfig.jwt.secret);
  } catch (error) {}
}

export { ensureAuthenticated };
