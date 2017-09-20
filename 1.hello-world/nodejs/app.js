const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World! This is nodejs.')
})

app.listen(PORT, function () {
  console.log('App started on port: ' + PORT + '!')
})
