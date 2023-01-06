import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "../use-cases/UpdateClient";

export class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {

    const {
      name,
      email,
      phone,
      address,
      cpf,
    } = request.body

    const { id } = request.params

    const updateClientUseCase = container.resolve(UpdateClientUseCase)

    await updateClientUseCase.execute(id, {
      name,
      email,
      phone,
      address,
      cpf,
    })

    return response.status(201).send()

  }
}