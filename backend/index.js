const express = require('express')
const app = express()
const character = require('./api/character')

app.use(express.json({ extended: false }))

app.use('/api/character', character)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))
