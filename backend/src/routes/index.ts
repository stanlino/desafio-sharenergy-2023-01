import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";

const routes = Router()

routes.use(authenticateRoutes)

routes.use(ensureAuthenticated)

routes.use('/clients', clientsRoutes)

export { routes }