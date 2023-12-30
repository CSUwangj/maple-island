const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/info/:regoin/:name', async (req, res) => {
  const r = await axios(`https://api.maplestory.gg/v2/public/character/${req.params.region}/${req.params.name}`)
  const img = await axios(`${r.data.CharacterData.CharacterImageURL}`)
  r.data.CharacterData.Image = Buffer.from(img.data).toString('base64')
  res.send(r.data)
})

module.exports = router