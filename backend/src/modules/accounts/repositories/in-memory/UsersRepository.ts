import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsers";

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[]

  constructor() {
    this.users = [{
      id: '123456',
      username: 'desafiosharenergy',
      password: '$2a$08$xNtqPDkgVruRuQk2keXXcemDoAhp24n0CsrYZgth3sbjNVe/uvGfK'
    }]
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find(user => user.username === username)

    return user ?? null
  }
}