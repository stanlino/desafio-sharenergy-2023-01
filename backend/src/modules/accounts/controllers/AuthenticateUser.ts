import { container } from 'tsyringe'
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from '../use-cases/AuthenticateUser';

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUserUseCase.execute({ username, password })

    return response.json(token)
  }
}