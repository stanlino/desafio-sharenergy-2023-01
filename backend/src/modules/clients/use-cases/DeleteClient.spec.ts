import 'reflect-metadata'
import { AppError } from '../../../errors/AppError'

import { IClientsRepository } from "../repositories/IClients"
import { ClientsRepositoryInMemory } from "../repositories/in-memory/ClientsRepository"
import { CreateClientUseCase } from "./CreateClient"
import { DeleteClientUseCase } from "./DeleteClient"
import { ListClientsUseCase } from "./ListClients"

let clientsRepositoryInMemory: IClientsRepository
let createClientUseCase: CreateClientUseCase
let listClientsUseCase: ListClientsUseCase
let deleteClientUseCase: DeleteClientUseCase

describe('Delete Client', () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory()
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory)
    listClientsUseCase = new ListClientsUseCase(clientsRepositoryInMemory)
    deleteClientUseCase = new DeleteClientUseCase(clientsRepositoryInMemory)
  })

  it('Should be able delete a client', async () => {

    await createClientUseCase.execute({
      name: 'Stanley',
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    await createClientUseCase.execute({
      name: 'Dammaris',
      email: 'dammaris@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    const prevClients = await listClientsUseCase.execute()

    await deleteClientUseCase.execute({
      id: prevClients.clients[0].id
    })

    const newClients = await listClientsUseCase.execute()

    expect(newClients.clients).toHaveLength(1)

  })

  it('Should not be able delete a nonexistent client', async () => {

    await createClientUseCase.execute({
      name: 'Stanley',
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    expect(async () => {
      await deleteClientUseCase.execute({
        id: '1dsadasdsa'
      })
    }).rejects.toBeInstanceOf(AppError)

  })
})