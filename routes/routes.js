const router = require('express').Router();
const indexController = require('../controllers/index.controller');
const clientsController = require('../controllers/clients.controller');

module.exports = () => {
    // Routes Get 🚗
    router.get('/',indexController.getIndex);
    router.get('/clients',clientsController.getAllClients);
    router.get('/clients/:id',clientsController.getOneClient)
    router.get('/client',clientsController.getClientByQuery)
    // Routes Post 
    router.post('/clients',clientsController.storeClient)
    //Router Put : 
    router.put('/clients/:id',clientsController.updateOneClient)
    //Router Delete : 
    router.delete('/clients/:id',clientsController.deleteOneClient)
    

    return router;
};
