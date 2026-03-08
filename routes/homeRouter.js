const { Router } = require('express');
const homeRouter = new Router();
const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getHomePage);
homeRouter.post('/', homeController.createCategory);
homeRouter.get('/deleteCategory/:id', homeController.deleteCategory);
homeRouter.post('/editCategory', homeController.editCategory);

module.exports = homeRouter;