import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function update(req: Request, res: Response) {
    return UserDao.update(req.body, req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({error: err}))
}