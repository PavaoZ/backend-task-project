import express, { Application, Request, Response, NextFunction } from 'express'
import "reflect-metadata";
import db from './database/models'
import * as routes from './routes/_index'

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

routes.initRoutes(app)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
})

export default app