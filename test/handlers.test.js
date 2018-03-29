const expect = require('chai').expect

describe('handlers', () => {
  describe('registerUser', function () {
    it("should return 'passwords do not match' when password and confirmation do not match", function () {
      const registerUser = require('../routes/handlers').registerUser
      var request = {
        body: {
          password: 'test',
          passwordConf: 'testing'
        }
      }
      var response = {
        viewName: ""
        , data: {}
        , render: function (view, viewData) {
          this.viewName = view
          this.data = viewData
        }
        , send: function (data) {
          this.data = data
        }
      }
      registerUser(request, response, function () {return 'next called'})
      expect(response.data).to.equal('passwords do not match')
    })
    it("should return 'All fields required.' when not all fields are completed", function () {
      const registerUser = require('../routes/handlers').registerUser
      var request = {
        body: {
          firstName: 'Dominic',
          surname: 'Farnham',
          email: '',
          password: 'test',
          passwordConf: 'test'
        }
      }
      var response = {
        viewName: ""
        , data: {}
        , render: function (view, viewData) {
          this.viewName = view
          this.data = viewData
        }
        , send: function (data) {
          this.data = data
        }
      }

      expect(registerUser(request, response, err => err).message).to.equal('All fields required.')
    })
  })
})
