import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import mongoSantize from 'express-mongo-sanitize'
import helmet from 'helmet'
import xss from 'xss-clean'
// import rateLimit from 'express-rate-limit'
import hpp from 'hpp'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Route files
import userRoutes from './routes/userRoutes.js'
import cmcaPersonRoutes from './routes/cmcaPersonRoutes.js'
import cmcaBankAccountRoutes from './routes/cmcaBankAccountRoutes.js'
import mvPersonRoutes from './routes/mvPersonRoutes.js'
import mvBankAccountRoutes from './routes/mvBankAccountRoutes.js'
// import villageRoutes from './routes/villageRoutes.js'
import regionRoutes from './routes/regionRoutes.js'
import cmcaKeyStatsRoutes from './routes/cmcaKeyStatsRoutes.js'
import mvKeyStatsRoutes from './routes/mvKeyStatsRoutes.js'
import cmcaRegionPopulationRoutes from './routes/cmcaRegionPopulationRoutes.js'
import mvPopulationRoutes from './routes/mvPopulationRoutes.js'

dotenv.config()

connectDB()

const app = express()

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Sanitize data
app.use(mongoSantize())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   maxRequet: 100
// })

// app.use(limiter)

// Prevent http param polution
app.use(hpp())

// Enable CORS
app.use(cors())

// Mount routes
app.use('/api/user', userRoutes)
app.use('/api/person/cmca', cmcaPersonRoutes)
app.use('/api/bankaccount/cmca', cmcaBankAccountRoutes)
app.use('/api/person/mv', mvPersonRoutes)
app.use('/api/bankaccount/mv', mvBankAccountRoutes)
// app.use('/api/village', villageRoutes)
app.use('/api/region', regionRoutes)
app.use('/api/cmca/keystats', cmcaKeyStatsRoutes)
app.use('/api/mv/keystats', mvKeyStatsRoutes)
app.use('/api/statistics/cmca', cmcaRegionPopulationRoutes)
app.use('/api/statistics/mv', mvPopulationRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
