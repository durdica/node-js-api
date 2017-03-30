const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

Event = require('./models/event')

//Connect to mongoose
mongoose.connect('mongodb://localhost/eventapi')
let db = mongoose.connection

app.get('/', (req, res) => {
    res.send('Use api/events')
})

app.get('/api/events', (req, res) => {
    Event.getEvents(err, events) => {
        if(err){
            throw err;
        }
        res.json(events);
    })
})

app.get('/api/events/:_id', (req, res) => {
    Event.getEventById(req.params._id, (err, event) => {
        if(err){
            throw err;
        }
        res.json(event);
    })
})

app.post('/api/events', (req, res) => {
    let event = req.body;
    Event.addEvent(event, (err, event) => {
        if(err){
            throw err;
        }
        res.json(event);
    })
})

app.put('/api/events/:_id', (req, res) => {
    let id = req.params._id;
    let event = req.body;
    Event.updateEvent(id, event, (err, event) => {
        if(err){
            throw err;
        }
        res.json(event);
    })
})

app.delete('/api/events/:_id', (req, res) => {
    let id = req.params._id;
    Event.deleteEvent(id, (err, event) => {
        if(err){
            throw err;
        }
        res.json(event);
    })
})
app.listen(3000, () => console.log('Started on port 3000'))

//use of promise
const getEvent = (index) => {
	return new Promise (function (res, rej) {
	if(index > 4){
		rej("Index out of events");
	}
	else{
		res (events[index - 1]);
	}
  })
}
