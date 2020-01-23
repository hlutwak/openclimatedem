const morgan = require('morgan');
const express = require('express');

const app = express();

//middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());

//start server
module.exports = app;
