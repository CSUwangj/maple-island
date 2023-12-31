const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const axios = require('axios')
import serverless from "serverless-http"

app.use(cors())
app.use(express.json({ extended: false }))

router.get('/character/info/:regoin/:name', async (req, res) => {
  const r = await axios(`https://api.maplestory.gg/v2/public/character/${req.params.region}/${req.params.name}`)
  const img = await axios(`${r.data.CharacterData.CharacterImageURL}`, { responseType: 'arraybuffer' })
  r.data.CharacterData.Image = Buffer.from(img.data, 'binary').toString('base64')
  res.send(r.data)
})
app.use('/api/', router)

export const handler = serverless(app)