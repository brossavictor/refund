import * as dotenv from "dotenv";

dotenv.config;

export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: "1d",
  },
};
