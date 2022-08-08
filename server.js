const express = require('express');
const { app, io, server } = require('./initServer');
const cors = require('cors');
const { initialise } = require('./socketEvents');

//Server

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json('Quiz API')
});

io.on("connection", socket => initialise(socket));

module.exports = { server };
