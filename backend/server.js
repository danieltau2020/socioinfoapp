import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Route files
import userRoutes from './routes/userRoutes.js'
import cmcaPersonRoutes from './routes/cmcaPersonRoutes.js'
import cmcaBankAccountRoutes from './routes/cmcaBankAccountRoutes.js'
import mvPersonRoutes from './routes/mvPersonRoutes.js'
import mvBankAccountRoutes from './routes/mvBankAccountRoutes.js'
import villageRoutes from './routes/villageRoutes.js'
import regionRoutes from './routes/regionRoutes.js'
import cmcaStatsRoutes from './routes/cmcaStatsRoutes.js'

dotenv.config()

connectDB()

const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Mount routes
app.use('/api/user', userRoutes)
app.use('/api/person/cmca', cmcaPersonRoutes)
app.use('/api/bankaccount/cmca', cmcaBankAccountRoutes)
app.use('/api/person/minevillages', mvPersonRoutes)
app.use('/api/bankaccount/minevillages', mvBankAccountRoutes)
app.use('/api/village', villageRoutes)
app.use('/api/region', regionRoutes)
app.use('/api/cmca/keystats', cmcaStatsRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
