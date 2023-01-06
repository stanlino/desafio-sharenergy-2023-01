import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsers";

export class UsersRepository implements IUsersRepository {

  private repository: PrismaClient

  constructor() {
    this.repository = new PrismaClient()
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.repository.users.findUnique({
      where: { username }
    })

    return user
  }

}