import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Client } from "../entities/Client";
import { IClientsRepository } from "../repositories/IClients";

interface IRequest {
  id: string
}

interface IResponse {
  client: Client
}

@injectable()
export class GetClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  async execute({ id }: IRequest): Promise<IResponse> {

    if (!ObjectId.isValid(id)) throw new AppError('Invalid user ID!')

    const client = await this.clientsRepository.findById(id)

    if (!client) throw new AppError('User not exists!', 404)

    return {
      client
    }

  }
}