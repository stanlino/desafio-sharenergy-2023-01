import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsers";

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[]

  constructor() {
    this.users = [{
      id: '123456',
      username: 'stanley',
      password: '$2a$08$hMB88ekHqEjc1Nc8CM5Bsudl2OaaQZ8XLgHXjbsZYbXydR.RVSZo2'
    }]
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find(user => user.username === username)

    return user ?? null
  }
}