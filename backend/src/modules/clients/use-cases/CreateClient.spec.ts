import 'reflect-metadata'

import { IClientsRepository } from "../repositories/IClients"
import { CreateClientUseCase } from "./CreateClient"
import { ClientsRepositoryInMemory } from '../repositories/in-memory/ClientsRepository'
import { ListClientsUseCase } from "./ListClients"
import { Client } from '../entities/Client'
import { AppError } from '../../../errors/AppError'

let clientsRepositoryInMemory: IClientsRepository
let createClientUseCase: CreateClientUseCase
let listClientsUseCase: ListClientsUseCase

describe('Create Client', () => {
  beforeEach(() => {
    clientsRepositoryInMemory = new ClientsRepositoryInMemory()
    createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory)
    listClientsUseCase = new ListClientsUseCase(clientsRepositoryInMemory)
  })

  it('Should be able register a new client', async () => {

    await createClientUseCase.execute({
      name: 'Stanley',
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    })

    const response = await listClientsUseCase.execute()

    expect(response).toHaveProperty('clients')

  })

  it('Should not be able register a new client without name', () => {

    const props = {
      email: 'stanley92filipe@gmail.com',
      phone: '123456789',
      address: 'Tocantins',
      cpf: '123456'
    } as Client

    expect(async () => {
      await createClientUseCase.execute(props)
    }).rejects.toBeInstanceOf(AppError)

  })
})