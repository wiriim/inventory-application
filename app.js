const express = require('express');
const app = express();

const homeRouter = require('./routes/homeRouter');
app.use('/', homeRouter);

const DEFAULT_PORT = process.env.DEFAULT_PORT;
app.listen(DEFAULT_PORT, (err) => {
    if (err) throw err;

    console.log(`Application is listening on port ${DEFAULT_PORT}`);
});