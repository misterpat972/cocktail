const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
  req.header('Access-Control-Allow-Origin', '*')
  req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
})


app.listen(port, () => {
  console.log('API REST en écoute sur le port 3000!')
})
