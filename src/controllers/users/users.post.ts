import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function store(req: Request, res: Response) {
    return UserDao.store(req.body)
        .then(user => res.status(201).send(user))
        .catch(err => res.status(500).json({error: err}))
}