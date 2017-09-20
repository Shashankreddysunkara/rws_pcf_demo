const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const path = require('path')
const PORT = process.env.PORT
const CF_INSTANCE_INDEX = process.env.CF_INSTANCE_INDEX
const CF_INSTANCE_GUID = process.env.CF_INSTANCE_GUID

app.use(express.static(path.join(__dirname, 'assets')))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home', {user: "martin"})
    })

app.listen(PORT, function () {
  console.log('Example app listening on port' + PORT + '!' )
})
