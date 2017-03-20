const mongoose = require('mongoose');
//Event Schema
const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type, String;
    },
    date:{
        type: Date
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Event = module.exports = mongoose.model('Event', eventSchema);
//Get Events
module.exports.getEvents = (callback, limit) => {
    Event.find(callback).limit(limit);
}
//Get Event
module.exports.getEventById = (id, callback) => {
    Event.findById(id, callback);
}
//Add Event
module.exports.getEventById = (event, callback) => {
    Event.create(event, callback);
}
//Update Event
module.exports.updateEvent = (id, event, options callback) => {
    let query = {_id: id};
    let update = {
        title: event.title,
        description: event.description,
        date: event.date,
    }
    Event.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteEvent = (id, callback) => {
    let query = {_id: id};
    Event.remove(query, callback);
}
