import express from 'express'
import cors from 'cors'
import { connectDb } from './db/db.connection.js'
import { routes } from './routes/index.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { setupSwagger } from './swagger.js'

dotenv.config()
const app = express()

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true
}))

//database connection
connectDb();

//swagger UI setup
setupSwagger(app);

//routes
app.use('/api/v1', routes)


export default app;