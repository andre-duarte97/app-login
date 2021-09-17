const fastify = require('fastify')({ logger: true })
const cors = require('fastify-cors')


fastify.register(cors)
module.exports = fastify
