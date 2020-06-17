const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.list_ongs); 
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.list_incidents);
routes.post('/incidents', IncidentsController.create);
routes.delete('/inceidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.show_incidents_ong);

module.exports = routes;