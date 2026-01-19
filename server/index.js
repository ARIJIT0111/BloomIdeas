import express from 'express'
import cors from 'cors'
import connecToMongoDB from './db/db.js'

import authRouter from './routes/auth.js'
import { connect } from 'mongoose'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)

app.listen(5000,() => {
    connecToMongoDB()
    console.log("Server is running");
})