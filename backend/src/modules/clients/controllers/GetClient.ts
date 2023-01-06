import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetClientUseCase } from "../use-cases/GetClient";

export class GetClientController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    const getClientUseCase = container.resolve(GetClientUseCase)

    const { client } = await getClientUseCase.execute({
      id
    })

    return response.json(client)
  }
}