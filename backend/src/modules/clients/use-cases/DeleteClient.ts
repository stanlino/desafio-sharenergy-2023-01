import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { IClientsRepository } from "../repositories/IClients";

interface IRequest {
  id: string
}

@injectable()
export class DeleteClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  async execute({ id }: IRequest): Promise<void> {

    if (!ObjectId.isValid(id)) throw new AppError('Invalid user ID!')

    const client = await this.clientsRepository.findById(id)

    if (!client) throw new AppError('Client not exists!', 404)

    await this.clientsRepository.delete(client.id)

  }
}