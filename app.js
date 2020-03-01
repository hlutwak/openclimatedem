const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, `views`));
//middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Serving static files
app.use(express.json());




const contactRouter = require("./routes/contactRoutes");
app.use('/api/v1/contact', contactRouter);

//start server
module.exports = app;
