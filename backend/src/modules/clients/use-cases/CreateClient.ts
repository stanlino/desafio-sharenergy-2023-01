import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { Client } from "../entities/Client";
import { IClientsRepository } from "../repositories/IClients";

interface IRequest extends Omit<Client, 'id'> { }
interface IResponse {
  client: Client
}

@injectable()
export class CreateClientUseCase {

  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  async execute({
    name,
    email,
    phone,
    address,
    cpf
  }: IRequest): Promise<IResponse> {
    if (!name || !email || !phone || !address || !cpf) throw new AppError('Missing arguments')

    const clientAlreadyExists = await this.clientsRepository.findByEmail(email)

    if (clientAlreadyExists) throw new AppError('Client already exists!')

    const client = await this.clientsRepository.create({
      name,
      email,
      phone,
      address,
      cpf
    })

    return {
      client
    }
  }
}