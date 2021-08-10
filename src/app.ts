import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const db = require('./database/models')

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('help')
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Server running'))
})