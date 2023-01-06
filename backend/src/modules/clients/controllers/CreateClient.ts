import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "../use-cases/CreateClient";

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      phone,
      address,
      cpf
    } = request.body

    const createClientUseCase = container.resolve(CreateClientUseCase)

    await createClientUseCase.execute({
      name,
      email,
      phone,
      address,
      cpf
    })

    return response.status(201).send()
  }
}