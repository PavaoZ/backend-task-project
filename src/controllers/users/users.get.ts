import { Request, Response } from 'express'
import { UserDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  let query = "", email = "", phoneNumber = ""
  if(req.query) {
    if (req.query.query) { query = (req.query as any).query; }
    if (req.query.email) { email = (req.query as any).email; }
    if (req.query.phoneNumber) { phoneNumber = (req.query as any).phoneNumber; }
  }

  return UserDao
    .findAll(query, email, phoneNumber)
    .then(users => res.status(200).send(users))
    .catch(err => res.status(500).json({
        message: "Something went wrong",
        error: err
    }))
}