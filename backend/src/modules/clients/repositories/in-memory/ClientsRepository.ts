import { Client } from "../../entities/Client"
import { IClientsRepository } from "../IClients"

export class ClientsRepositoryInMemory implements IClientsRepository {
  private clients: Client[]

  constructor() {
    this.clients = []
  }

  async create(props: Client): Promise<void> {
    const client = new Client(props)

    this.clients.push(client)
  }

  async listAll(): Promise<Client[]> {
    return this.clients
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = this.clients.find(client => client.email === email)

    return client ?? null
  }

  async findById(id: string): Promise<Client | null> {
    const client = this.clients.find(client => client.id === id)

    return client ?? null
  }

  async update(id: string, props: Omit<Client, 'id'>): Promise<void> {
    const client = this.clients.find(client => client.id === id)

    if (!client) return

    const updatedClient = new Client(props)

    this.clients.splice(
      this.clients.indexOf(client),
      1
    )

    this.clients.push(updatedClient)
  }

  async delete(id: string): Promise<void> {
    const client = this.clients.find(client => client.id === id)

    if (!client) return

    this.clients.splice(
      this.clients.indexOf(client),
      1
    )
  }

}