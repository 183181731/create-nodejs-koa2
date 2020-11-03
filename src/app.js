'use strict'
import Koa2 from 'koa'
import MainRoutes from './routes/main-routes'
import config from './config'
import logger from 'koa-logger'
import cors from 'koa2-cors'

const app = new Koa2()

app.use(logger())
  .use(cors())
  .use(MainRoutes.routes())
  .use(MainRoutes.allowedMethods())

app.listen(config.port)
console.log('listening on port ' + config.port)
