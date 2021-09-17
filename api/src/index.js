const fastify = require('./app')

const port = 3333

fastify.listen(port, (err, adress) => {
  if (err) throw err
  fastify.log.info(`server listening on ${port}`)
})
