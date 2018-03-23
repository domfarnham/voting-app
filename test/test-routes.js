const expect = require('chai').expect
const request = require('supertest')

describe('routes', function () {
  let server
  beforeEach(function () {
    server = require('../bin/www')
  })
  afterEach(function () {
    server.close()
  })
  it('should respond to /', function testHomePage (done) {
    request(server)
      .get('/')
      .expect(200, done)
  })
  it('should respond to /sign-up', function testSignUp (done) {
    request(server)
      .get('/sign-up')
      .expect(200, done)
  })
  it('should respond to /login', function testSignIn (done) {
    request(server)
      .get('/login')
      .expect(200, done)
  })
  it('should respond to /user-home', function testUserHome (done) {
    request(server)
      .get('/user-home')
      .expect(200, done)
  })
  it('should respond to /new-poll', function testNewPoll (done) {
    request(server)
      .get('/new-poll')
      .expect(200, done)
  })
  it('should respond to /congrats', function testCongrats (done) {
    request(server)
      .get('/congrats')
      .expect(200, done)
  })
  it('should respond to /my-polls', function testMyPolls (done) {
    request(server)
      .get('/my-polls')
      .expect(200, done)
  })
  it('should respond to /:poll', function testPoll (done) {
    request(server)
      .get('/example-poll')
      .expect(200, done)
  })
  it('should respond to /register', function testRegister (done) {
    const testUser = {
      firstName: 'Bob',
      surname: 'Smith',
      email: 'bobs@test.com',
      password: 'testing123',
      passwordConf: 'testing123'
    }
    request(server)
      .post({url: '/register', formData: testUser})
      .expect(200, done)
  })
  it('should respond with 404 for everything else', function testPath (done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done)
  })
})
