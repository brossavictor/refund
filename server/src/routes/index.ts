import { Router } from "express";
import { usersRoutes } from "./user-routes";

const routes = Router();

//public routes
routes.use("/users", usersRoutes);

export { routes };
