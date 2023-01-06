import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/accounts/infra/repositories/UsersRepository'
import { IUsersRepository } from '../../modules/accounts/repositories/IUsers'
import { ClientsRepository } from '../../modules/clients/infra/repositories/ClientsRepository'
import { IClientsRepository } from '../../modules/clients/repositories/IClients'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository
)