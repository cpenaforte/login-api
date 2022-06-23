const services = require('./services');
const Boom = require('boom');
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken');

const v = new Validator();

module.exports = {
  auth: async ctx => {
    const { request, response } = ctx;

    const schema = {
      email: { max: 255, min: 5, type: 'string'},
      password: { max: 16, min: 8, type: 'string'}
    }
    const errors = v.validate(request.body, schema);

    if(Array.isArray(errors) && errors.length) {
      response.status = 400;
      response.body = Boom.badRequest(null, errors);
      return;
    }
    

    const user = await services.auth(request.body);

    if(user){
      response.body = {
        user: {
          id: user.id,
          email: user.email
        },
        token: jwt.sign({ email: user.email }, 'secret')
      };
    } else {
      response.status = 401;
      response.body = { result: Boom.unauthorized()};
    }
  }
}