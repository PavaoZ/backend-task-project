import { Express } from 'express'
import { UserController } from '../controllers/_index'
import { body } from 'express-validator';

export function routes(app: Express) {
    app.get('/api/users', UserController.getUsers.list)
    app.get('/api/users/:id', UserController.getUser.single)
    app.post(
        '/api/users', 
        body('firstName').isString(),
        body('lastName').isString(),
        body('email').isEmail(),
        body('uuid').isUUID(),
        body('phoneNumber').isString(),
        UserController.storeUser.store
    )
    
    app.put(
        '/api/users/:id',
        body('firstName').isString(),
        body('lastName').isString(),
        body('email').isEmail(),
        body('uuid').isUUID(),
        body('phoneNumber').isString(), 
        UserController.updateUser.update)
}


