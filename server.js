const express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.end("Hello World")
})

app.post('/user', function (req, res) {
  	res.end("yes")
})

app.get('/user/:id', function (req, res) {
	res.send('user ' + req.params.id)
})


app.listen(3000, function () {
  console.log('Started on port 3000')
})