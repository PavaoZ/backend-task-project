import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function single(req: Request, res: Response) {
  return UserDao
    .findOne(req.params.id)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).json({
        message: "Something went wrong",
        error: err
    }))
}