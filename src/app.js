import Fastify from 'fastify'
import MongoDBEquipe from '../config/db.js'
import argonautesRoutes from './routes/argonautesRoutes.js'
import cors from '@fastify/cors'
//import {getAllArgonautes} from './controllers/argonauteControllers.js'


const fastify = Fastify({
  logger: true
})

fastify.register(cors);

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

argonautesRoutes.forEach((route) =>{
    fastify.route(route)
}
)
  const start = async()=>{
    try{
        fastify.listen(8000);
        MongoDBEquipe.initialize();
    }
    catch(error){
        fastify.log.error(err)
        process.exit(1)
    }
}
start();