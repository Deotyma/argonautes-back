import Argonaute from '../models/argonauteModel.js'

const routes = [
    {
        url: '/api/argonautes',
        method: 'GET',
        handler: async (request, reply) => {
            const argonautes = await Argonaute.find();
            return argonautes
          }
    },
    {
        url: '/api/argonautes/:id',
        method: 'GET',
        handler: async (request, reply) => {
            const argonautes = await Argonaute.findById(request.params.id);
            return argonautes
          }
    },
    {
        url: '/api/argonautes/register',
        method: 'POST',
        handler: async (request, reply) => {

            const data = {
                name: request.body.name,
                description: request.body.description
            }
            const newArgonaute = new Argonaute(data);

            console.log(newArgonaute)

            const resultArgonaute = await newArgonaute.save();

            return newArgonaute

            
          }
    },
    {
        url: '/api/argonautes/:id',
        method: 'DELETE',
        handler: async (request, reply) => {
            await Argonaute.findByIdAndDelete(request.params.id);
            
          }
    },
    {
        url: '/api/argonautes/:id',
        method: 'PUT',
        handler: async (request, reply) => {
            const argonaute = await Argonaute.findByIdAndUpdate(request.params.id, request.body, {
                new: true,
                runValidators: true,
              });
            return argonaute
          }
    }
]

export default routes
