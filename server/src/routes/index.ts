import { Router } from "express";
import { usersRoutes } from "./user-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundsRoutes } from "./refunds-routes";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const routes = Router();

//public routes
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

//private routes
routes.use(ensureAuthenticated);
routes.use("/refunds", refundsRoutes);

export { routes };
