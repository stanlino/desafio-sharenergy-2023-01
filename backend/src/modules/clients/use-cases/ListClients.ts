import { inject, injectable } from "tsyringe";
import { Client } from "../entities/Client";
import { IClientsRepository } from "../repositories/IClients";

interface IResponse {
  clients: Client[]
}

@injectable()
export class ListClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  async execute(): Promise<IResponse> {
    const clients = await this.clientsRepository.listAll()

    return {
      clients
    }
  }
}