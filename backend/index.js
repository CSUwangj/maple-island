const express = require('express')
const app = express()
const character = require('./api/character')
const cors = require('cors')
import serverless from "serverless-http"

app.use(cors())
app.use(express.json({ extended: false }))
app.use('/character', character)

export const handler = serverless(app)