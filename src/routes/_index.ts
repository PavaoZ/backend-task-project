import { Express, Request, Response } from 'express'

import * as UserRoutes from './users'

export function initRoutes(app: Express) {
    UserRoutes.routes(app)
}