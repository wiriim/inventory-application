const { Router } = require('express');
const homeRouter = new Router();

homeRouter.get('/', (req, res) => {
    res.send('Home Page');
});

module.exports = homeRouter;