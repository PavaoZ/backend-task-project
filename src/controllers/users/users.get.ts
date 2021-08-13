import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return UserDao
    .findAll()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).json({
        message: "Something went wrong",
        error: err
    }))
}