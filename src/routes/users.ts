import { Express } from 'express'
import { UserController } from '../controllers/_index'

export function routes(app: Express) {
    app.get('/api/users', UserController.getUsers.list)
    // app.get('/api/users/:id', UserController.getUser)
    // app.post('/api/users', UserController.storeUser)
    // app.put('/api/users/:id', UserController.updateUser)
}


