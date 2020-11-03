'use strict'
import models from '../../models'

export const run = async (ctx) => {
  ctx.body = await models.hello.world.run()
}
