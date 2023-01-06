import { AppError } from "../../../errors/AppError";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepository";
import { IUsersRepository } from "../repositories/IUsers";
import { AuthenticateUserUseCase } from "./AuthenticateUser";

let usersRepository: IUsersRepository
let authenticateUserUseCase: AuthenticateUserUseCase

describe('Authenticate User', () => {

  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)
  })

  it('Should be able autenticate a user', async () => {
    const response = await authenticateUserUseCase.execute({
      username: 'stanley',
      password: '123456'
    })

    expect(response).toHaveProperty('token')
  })

  it('Should not be able autenticate a user with incorrect password', () => {
    expect(async () => {
      const response = await authenticateUserUseCase.execute({
        username: 'stanley',
        password: '12345'
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('Should not be able autenticate a nonexistent user', () => {
    expect(async () => {
      const response = await authenticateUserUseCase.execute({
        username: 'jonas',
        password: '12345'
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})