import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Client } from "../entities/Client";
import { IClientsRepository } from "../repositories/IClients";

interface IRequest extends Omit<Client, 'id'> { }

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  async execute(id: string, {
    name,
    email,
    address,
    cpf,
    phone
  }: IRequest): Promise<void> {

    if (!ObjectId.isValid(id)) throw new AppError('Invalid user ID!')

    const client = await this.clientsRepository.findById(id)

    if (!client) throw new AppError('User not exists!', 404)

    await this.clientsRepository.update(client.id, {
      name,
      email,
      address,
      cpf,
      phone,
    })

  }
}