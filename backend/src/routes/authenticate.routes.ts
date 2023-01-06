import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/controllers/AuthenticateUser";
import { RefreshTokenController } from "../modules/accounts/controllers/RefreshToken";

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post('/session', authenticateUserController.handle)
authenticateRoutes.post('/refresh-token', refreshTokenController.handle)

export { authenticateRoutes }