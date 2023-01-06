import { ObjectId } from "mongodb"
import { v4 } from "uuid"

interface ClientProps {
  name: string
  email: string
  phone: string
  address: string
  cpf: string
}

export class Client {
  id: string

  name: string
  email: string
  phone: string
  address: string
  cpf: string

  constructor(props: ClientProps) {
    this.id = new ObjectId().toHexString()

    this.name = props.name
    this.email = props.email
    this.phone = props.phone
    this.address = props.address
    this.cpf = props.cpf
  }
}