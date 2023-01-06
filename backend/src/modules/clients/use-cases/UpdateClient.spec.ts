import 'reflect-metadata'
import { AppError } from '../../../errors/AppError'

import { IClientsRepository } from "../repositories/IClients"
import { ClientsRepositoryInMemory } from "../repositories/in-memory/ClientsRepository"
import { GetClientUseCase } from './GetClient'
import { CreateClientUseCase } from "./CreateClient"
import { ListClientsUseCase } from "./ListClients"
import { UpdateClientUseCase } from './UpdateClient'

let clientsRepositoryInMemory: IClientsRepository
let createClientUseCase: CreateClientUseCase
let updateClientUseCase: UpdateClientUseCase
let getClientUseCase: GetClientUseCase
let listClientsUseCase: ListClientsUseCase

describe('Update Client', () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory()
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory)
    updateClientUseCase = new UpdateClientUseCase(clientsRepositoryInMemory)
    getClientUseCase = new GetClientUseCase(clientsRepositoryInMemory)
    listClientsUseCase = new ListClientsUseCase(clientsRepositoryInMemory)
  })

  it('Should be able update a client', async () => {

    await createClientUseCase.execute({
      name: 'Stanley',
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    const { clients } = await listClientsUseCase.execute()

    const { client } = await getClientUseCase.execute({ id: clients[0].id })

    await updateClientUseCase.execute(client.id, {
      name: client.name,
      email: 'jonas@gmail.com',
      phone: client.phone,
      address: client.address,
      cpf: client.cpf,
    })

    const { client: updatedClient } = await getClientUseCase.execute({ id: clients[0].id })

    expect(updatedClient.email).toBe('jonas@gmail.com')

  })

  it('Should not be able update a nonexistent client', async () => {

    await createClientUseCase.execute({
      name: 'Stanley',
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    const { clients } = await listClientsUseCase.execute()

    const { client } = await getClientUseCase.execute({ id: clients[0].id })

    expect(async () => {
      await updateClientUseCase.execute('banana', {
        name: client.name,
        email: 'jonas@gmail.com',
        phone: client.phone,
        address: client.address,
        cpf: client.cpf,
      })
    }).rejects.toBeInstanceOf(AppError)

  })

})