const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/authors', require('./routes/authorRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));

module.exports = app;
