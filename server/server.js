const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, '../dist/')))

//app.get('/', (req, res) => console.log(`hello"))
app.get('/test', function (req, res) {
  res.send('Harry potter \n Spiderman \n Joker')
})

app.post('/test', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => console.log(`Leo from Express is listening on port ${port}!`))