const express = require('express');
const { app, io, server } = require('./initServer');
const cors = require('cors');
const { initialise } = require('./socketEvents');

//Server

app.use(cors());
app.use(express.json());

// highscore routes for data
const scoreRoutes = require('./routes/highscores')

app.use('/', scoreRoutes);

io.on("connection", socket => initialise(socket));

module.exports = { server };
