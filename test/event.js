//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let event = require('./models/event');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Events', () => {
    beforeEach((done) => { //Before each test we empty the database
        Event.remove({}, (err) => { 
           done();         
        });     
    });

/*
  * Test the /GET route for all events
  */
  describe('/GET event', () => {
      it('it should GET all the events', (done) => {
        chai.request(server)
            .get('/event')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
              done();
            });
      });
  });

});



 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id event', () => {
      it('it should GET an event by the given id', (done) => {
        let event = new Event({  name:"event Swap", description:"Bring a event and swap it", date:"2017-07-03" });
        event.save((err, event) => {
            chai.request(server)
            .get('/event/' + event.id)
            .send(event)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('date');
                res.body.should.have.property('_id').eql(event.id);
              done();
            });
        });

      });
  });
});




/*
  * Test the /POST route
  */
  describe('/POST event', () => {
      it('it should POST an event', (done) => {
        let event = { name: "Storytelling; Finding your voice", description: "An interactive storytelling session for families.", date: "2017-07-02" }
        chai.request(server)
            .post('/event')
            .send(event)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });

  });
});


/*
  * Test the /PUT/:ID route
  */
 describe('/PUT/:id event', () => {
      it('it should UPDATE an event given the id', (done) => {
        let event = new event({name: "The Digital Debate", description: "A new era of reading and publishing.", date: " "})
        event.save((err, event) => {
                chai.request(server)
                .put('/event/' + event.id)
                .send({name: "The Digital Debate", description: "A new era of reading and publishing.", date: "2017-07-02"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Event updated!');
                  done();
                });
          });
      });
  });
  
  
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id event', () => {
      it('it should DELETE a event given the id', (done) => {
        let event = new event({name: "Storytelling; Finding your voice", description: "An interactive storytelling session for families.", date: "2017-07-02"})
        event.save((err, event) => {
                chai.request(server)
                .delete('/event/' + event.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Event deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
 
