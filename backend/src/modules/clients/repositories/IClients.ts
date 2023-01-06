import { Client } from "../entities/Client";

export interface IClientsRepository {
  create(props: Omit<Client, 'id'>): Promise<void>
  listAll(): Promise<Client[]>
  findByEmail(email: string): Promise<Client | null>
  findById(id: string): Promise<Client | null>
  update(id: string, props: Omit<Client, 'id'>): Promise<void>
  delete(id: string): Promise<void>
}