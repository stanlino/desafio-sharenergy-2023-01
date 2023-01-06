import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientsUseCase } from "../use-cases/ListClients";

export class ListClientsController {
  async handle(request: Request, response: Response): Promise<Response> {

    const listClientsUseCase = container.resolve(ListClientsUseCase)

    const { clients } = await listClientsUseCase.execute()

    return response.json({
      results: clients
    })

  }
}