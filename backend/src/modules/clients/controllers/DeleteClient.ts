import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientUseCase } from "../use-cases/DeleteClient";

export class DeleteClientController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    const deleteClientUseCase = container.resolve(DeleteClientUseCase)

    await deleteClientUseCase.execute({
      id
    })

    return response.status(201).send()

  }
}