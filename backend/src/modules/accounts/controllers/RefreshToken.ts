import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "../use-cases/RefreshToken";

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase)

    const refresh_token_response = await refreshTokenUseCase.execute({
      refresh_token
    })

    return response.json(refresh_token_response)
  }
}