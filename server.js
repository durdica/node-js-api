const express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var events = {
  1: new Event(1, "Writers Behave Badly", "Creative Writing Workshop", "2017-07-01"),
  2: new Event(2, "Book Swap", "Bring a book and swap it.", "2017-07-03"),
  3: new Event(3, "Storytelling: Finding Your Voice", "Interactive Storytelling", "2017-07-02"),
  4: new Event(4, "Digital Debate", "New era of reading", "2017-07-02")
};

app.get('/event/all', (req, res)) => res.end(
  for(var key in events){
    res.send(JSON.stringify(events[key]));
  }
)
app.get('/event/:id', req, res)) => res.end(
  JSON.stringify(events[req.params.id]);
)

app.post('/event/new', req, res)) => res.end(

)

app.put('/event/:id/update', (req, res)) => res.end(

)

app.delete('/event/:id/delete', (req, res)) => res.end(

)

app.get('/', (req, res) => res.end("Hello World"))


app.post('/user', (req, res) => res.end("yes"))


app.get('/user/:id', (req, res) => res.send('user ' + req.params.id))

//Create an event object containing an id, title, a description and a date


app.listen(3000, () => console.log('Started on port 3000'))
