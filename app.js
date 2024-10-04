import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { test } from './controllers/almno.controller.js'

dotenv.config()


// Connect to MongoDB
mongoose.connect(process.env.url)
.then(() => {
        console.log('Se ha conectado a la base de datos')
})
.catch((err) => {
        console.log('Ocurrio un error al conectarse:', err)
})

const app = express()
app.use(cors())

app.listen(4000, ()=> {
    console.log('El servidor se esta ejecutando en el puerto 4000')
})

test()