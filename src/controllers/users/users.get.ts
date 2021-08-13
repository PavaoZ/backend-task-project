import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  let query = req.query.q as string
  let email = req.query.email as string
  let phoneNumber = req.query.phoneNumber as string

  return UserDao
    .findAll(query, email, phoneNumber)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).json({
        message: "Something went wrong",
        error: err
    }))
}