'use strict'
import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/api/helloworld', controllers.hello.world.run)

module.exports = router
