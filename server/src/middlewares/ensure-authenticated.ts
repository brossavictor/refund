import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new AppError("Token not found.", 401);
    } else if (!authConfig.jwt.secret) {
      throw new AppError("No valid secret.", 401);
    }
    const [, token] = authHeader.split(" ");
    const { role, sub: user_id } = verify(
      token,
      authConfig.jwt.secret
    ) as JwtPayload;

    if (typeof user_id === "string") {
      request.user = {
        id: user_id,
        role,
      };
      return next();
    } else {
      throw new AppError("Username is not valid.", 401);
    }
  } catch (error) {
    throw new AppError("Invalid JWT.", 401);
  }
}

export { ensureAuthenticated };
