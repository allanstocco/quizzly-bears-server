const { GameState } = require('../models/GameState')
const { io } = require('../initServer');

function initialise(socket) {
    console.log('user connected');

    socket.on('disconnect', () => console.log('user disconnected'));

}

module.exports = { initialise };
