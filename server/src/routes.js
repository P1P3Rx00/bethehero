const express = require('express')

const routes = express.Router()

const {celebrate, Segments, Joi} = require('celebrate')

const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')

const SessionControler = require('./controllers/SessionController')


routes.post('/sessions', SessionControler.create)



routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}), ongController.create)

routes.get('/ongs', ongController.index)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.required()
    }).unknown()
}),ProfileController.index)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)


module.exports = routes