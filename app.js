const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
 res.status(200).json({
  slackUsername: "Dice",
  backend: true,
  age: 31,
  bio: "a dev looking to explore....regardless, life is all about exploring new things"
 })
})

const PORT = process.env.PORT || 2000

app.listen(PORT, console.log(`app running on port ${PORT}`))