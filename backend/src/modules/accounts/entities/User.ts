interface UserProps {
  username: string
  password: string
}

export class User {
  id?: string

  username: string
  password: string

  constructor({ username, password }: UserProps) {
    this.username = username
    this.password = password
  }
}