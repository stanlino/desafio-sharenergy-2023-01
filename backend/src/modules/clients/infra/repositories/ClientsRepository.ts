import { PrismaClient } from "@prisma/client";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/IClients";

export class ClientsRepository implements IClientsRepository {

  private repository: PrismaClient

  constructor() {
    this.repository = new PrismaClient()
  }

  async create(props: Omit<Client, "id">): Promise<Client> {
    const user = await this.repository.clients.create({
      data: props
    })

    return user
  }

  async listAll(): Promise<Client[]> {
    const clients = await this.repository.clients.findMany()

    return clients
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await this.repository.clients.findUnique({
      where: { email }
    })

    return client
  }

  async findById(id: string): Promise<Client | null> {

    const client = await this.repository.clients.findUnique({
      where: { id }
    })

    return client
  }

  async update(id: string, props: Omit<Client, "id">): Promise<void> {
    await this.repository.clients.update({
      data: props,
      where: { id }
    })
  }

  async delete(id: string): Promise<void> {
    await this.repository.clients.delete({
      where: { id }
    })
  }

}