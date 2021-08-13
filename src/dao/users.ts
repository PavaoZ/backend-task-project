import * as uuid from 'uuid'
import { User } from '../database/models/user'
import { Op } from 'sequelize'

export function store(user: { _id: string, email: string, firstName: string, lastName: string, phoneNumber: Array<{ type: string, value: string }> }): Promise<any> {
    return User
        .create({
            _id: uuid.v1(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: (user.phoneNumber).toString()
        })
}

export function findAll(query = "", email = "", phoneNumber = ""): Promise<any> {
    let whereL = {}

    if(query != "" && query != null) {
        (whereL as any).firstName = {
            [Op.like]: '%' + query + '%'
        },
        (whereL as any).lastName = {
            [Op.like]: '%' + query + '%'
        }
    }

    if(email != "" && email != null)
        (whereL as any).email = {
            [Op.like]: '%' + email + '%'
        }

    if(email != "" && phoneNumber != null)
        (whereL as any).phoneNumber = {
            [Op.like]: '%' + phoneNumber + '%'
        }

  return User
    .findAll({ where: {
        [Op.and]: whereL
    }, include: [{ all: true }] })
}

export function findOne(id: string): Promise<any> {
    return User
      .findOne({ 
          where: {
              _id: id
          }, include: [{ all: true }] })
}

export function update(user: { email: string, firstName: string, lastName: string, phoneNumber: Array<{ type: string, value: string }> }, id: string): Promise<any> {
    User.
        update({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: (user.phoneNumber).toString()
        }, {
            where: {
                _id: id
            }
        })
    return findOne(id)
}