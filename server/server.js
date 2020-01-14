const express = require('express')
const app = express()
const port = 5000
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controllers.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, '../dist/')))

//app.get('/', (req, res) => console.log(`hello"))
app.get('/movies', function (req, res) {
  controller.getList(req, res);
})

app.post('/list', function (req, res) {
  controller.postMovie(req,res);
})

app.delete('/delete', function (req, res) {
  controller.deleteMovie(req, res);
})

app.listen(port, () => console.log(`Leo from Express is listening on port ${port}!`))