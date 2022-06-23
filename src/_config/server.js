const Koa = require('koa');
const Router = require('koa-router');
const ApplyRoutes = require('./routes');
const BodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();


module.exports = () => {
  console.log('[Koa] Creating a new server on port 8080...');

  ApplyRoutes(router);

  app
    .use(cors({
      origin: "*",
      allowMethods: ['GET', 'POST']
    }))
    .use(BodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
  ;
  
  app.listen(8080);
}