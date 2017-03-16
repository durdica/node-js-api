const express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => res.end("Hello World"))


app.post('/user', (req, res) => res.end("yes"))


app.get('/user/:id', (req, res) => res.send('user ' + req.params.id))


app.listen(3000, () => console.log('Started on port 3000'))