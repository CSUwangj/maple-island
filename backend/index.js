const express = require('express')
const app = express()
const character = require('./api/character')
const cors = require('cors')

app.use(cors())
app.use(express.json({ extended: false }))
app.use('/character', character)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))
