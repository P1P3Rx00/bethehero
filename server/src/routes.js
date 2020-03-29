const express = require('express')

const routes = express.Router()

const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')

const SessionControler = require('./controllers/SessionController')


routes.post('/sessions', SessionControler.create)



routes.post('/ongs', ongController.create)

routes.get('/ongs', ongController.index)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)


module.exports = routes