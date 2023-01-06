import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import authConfig from '../../../config/auth'
import { AppError } from '../../../errors/AppError';

import { IUsersRepository } from "../repositories/IUsers";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  username: string
  token: string
  refresh_token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ username, password }: IRequest): Promise<IResponse> {

    const user = await this.usersRepository.findByUsername(username)

    if (!user) throw new AppError('User not exists!', 404)

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Incorrect credentials!', 400)
    }

    const {
      SECRET_TOKEN,
      EXPIRES_IN_TOKEN,
      SECRET_REFRESH_TOKEN,
      EXPIRES_IN_REFRESH_TOKEN
    } = authConfig

    const token = sign({}, SECRET_TOKEN, {
      subject: user.id,
      expiresIn: EXPIRES_IN_TOKEN
    })

    const refresh_token = sign({ username }, SECRET_REFRESH_TOKEN, {
      subject: user.id,
      expiresIn: EXPIRES_IN_REFRESH_TOKEN
    })

    return {
      username,
      token,
      refresh_token
    }

  }
}