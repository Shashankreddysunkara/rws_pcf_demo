const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hallo aissie, ik hou van jou')
})

app.listen(PORT, function () {
  console.log('Hallo Aislinn. ik hou van jou! ' + PORT + '!')
})
