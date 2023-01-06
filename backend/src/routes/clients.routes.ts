import { Router } from "express";

import { CreateClientController } from "../modules/clients/controllers/CreateClient";
import { DeleteClientController } from "../modules/clients/controllers/DeleteClient";
import { GetClientController } from "../modules/clients/controllers/GetClient";
import { ListClientsController } from "../modules/clients/controllers/ListClients";
import { UpdateClientController } from "../modules/clients/controllers/UpdateClient";

const createClientController = new CreateClientController()
const updateClientController = new UpdateClientController()
const deleteClientController = new DeleteClientController()
const listClientsController = new ListClientsController()
const getClientController = new GetClientController()

const clientsRoutes = Router()

clientsRoutes.post('/', createClientController.handle)
clientsRoutes.patch('/:id', updateClientController.handle)
clientsRoutes.delete('/:id', deleteClientController.handle)
clientsRoutes.get('/', listClientsController.handle)
clientsRoutes.get('/:id', getClientController.handle)

export { clientsRoutes }
