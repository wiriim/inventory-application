const express = require('express');
const app = express();
const path = require("node:path");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true }));

const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);

const itemsRouter = require('./routes/itemsRouter');
app.use('/items', itemsRouter);

const DEFAULT_PORT = process.env.DEFAULT_PORT;
app.listen(DEFAULT_PORT, (err) => {
    if (err) throw err;

    console.log(`Application is listening on port ${DEFAULT_PORT}`);
});