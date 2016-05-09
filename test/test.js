var supertest = require('supertest');

var api = supertest('http://localhost:3000');

describe('Testing route /', function() {
    it('GET / should return a 200 response', function(done) {
        api.get('/')
           .set('Accept', 'application/json')
           .expect(200, done);
    });
    it('POST / should return a 200 response', function(done) {
        api.post('/')
           .set('Content-Type', 'application/json')
           .send({mail:"test@mail.com"})
           .expect(200, done);
    });
});
