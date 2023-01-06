import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";

const routes = Router()

routes.use(authenticateRoutes)
routes.use('/clients', clientsRoutes)

export { routes }