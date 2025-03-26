import express from 'express'
import cors from 'cors'
import { connectDb } from './db/db.connection.js'
import { routes } from './routes/index.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//database connection
connectDb();

//routes
app.use('/api/v1', routes)

export default app;