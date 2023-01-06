import 'reflect-metadata'
import 'dotenv/config'

import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepository"
import { IUsersRepository } from "../repositories/IUsers"
import { AuthenticateUserUseCase } from "./AuthenticateUser"
import { RefreshTokenUseCase } from "./RefreshToken"
import { JsonWebTokenError } from 'jsonwebtoken'

let usersRepository: IUsersRepository
let authenticateUserUseCase: AuthenticateUserUseCase
let refreshTokenUseCase: RefreshTokenUseCase

describe('Refresh token', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)

    refreshTokenUseCase = new RefreshTokenUseCase(usersRepository)
  })

  it('Should be able to renew the token', async () => {
    const authUser = await authenticateUserUseCase.execute({
      username: 'desafiosharenergy',
      password: 'sh@r3n3rgy'
    })

    const refreshToken = await refreshTokenUseCase.execute({
      refresh_token: authUser.refresh_token
    })

    expect(refreshToken).toBeTruthy()
  })

  it('Should not be able to renew the token with a invalid refresh token', () => {
    expect(async () => {
      await refreshTokenUseCase.execute({
        refresh_token: '12345'
      })
    }).rejects.toBeInstanceOf(JsonWebTokenError)
  })

  it('Should not be able to renew the token with a token', async () => {

    const authUser = await authenticateUserUseCase.execute({
      username: 'desafiosharenergy',
      password: 'sh@r3n3rgy'
    })

    await expect(async () => {
      await refreshTokenUseCase.execute({
        refresh_token: authUser.token
      })
    }).rejects.toBeInstanceOf(JsonWebTokenError)
  })
})