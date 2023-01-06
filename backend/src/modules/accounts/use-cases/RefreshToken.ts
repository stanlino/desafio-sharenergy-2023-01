import { sign, verify } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import authConfig from '../../../config/auth'
import { AppError } from "../../../errors/AppError"
import { IUsersRepository } from "../repositories/IUsers"

interface IRequest {
  refresh_token: string
}

interface IPayload {
  username: string
}

interface IResponse {
  token: string
  refresh_token: string
}

@injectable()
export class RefreshTokenUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ refresh_token }: IRequest): Promise<IResponse> {

    const { SECRET_REFRESH_TOKEN, EXPIRES_IN_REFRESH_TOKEN, EXPIRES_IN_TOKEN, SECRET_TOKEN } = authConfig

    const { username } = verify(refresh_token, SECRET_REFRESH_TOKEN) as IPayload

    const user = await this.usersRepository.findByUsername(username)

    if (!user) throw new AppError("Invalid refresh token");

    const newToken = sign({}, SECRET_TOKEN, {
      subject: user.id,
      expiresIn: EXPIRES_IN_TOKEN
    })

    const newRefreshToken = sign({ username }, SECRET_REFRESH_TOKEN, {
      subject: user.id,
      expiresIn: EXPIRES_IN_REFRESH_TOKEN
    })

    return {
      token: newToken,
      refresh_token: newRefreshToken
    }

  }
}