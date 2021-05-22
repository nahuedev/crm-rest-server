const router = require('express').Router();
const indexController = require('../controllers/index.controller');

module.exports = () => {
    // Routes Get 🚗
    router.get('/',indexController.getIndex)
    
    return router;
};
