const { Router } = require('express');
const itemsRouter = new Router();
const itemsController = require('../controllers/itemsController');

itemsRouter.get('/:categoryId', itemsController.getItemsPage);
itemsRouter.post('/', itemsController.createItem);
itemsRouter.get('/deleteItem/:id', itemsController.deleteItem);

module.exports = itemsRouter;