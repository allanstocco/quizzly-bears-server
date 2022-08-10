const { QuizState } = require('../models/QuizState')
const { io } = require('../initServer');

function initialise(socket) {
    socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('create game', ({ room, category, difficulty, host, questions }) => {
        const state = new QuizState(category, difficulty, host, room, questions);
        socket.join(room);
        io.to(room).emit('change state', state);
    })
    socket.on('join game', ({ room, username }) => {
        socket.join(room);
        socket.to(room).emit('user joining lobby', username);
    })
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
    socket.on('send state to players', (state) => {
        io.to(state.room).emit('change state', state);
    })
    socket.on('update player score', ({room, player, score}) => {
        socket.to(room).emit('update all scores', {player, score});
    })
    socket.on('finish quiz', ({ room, player }) => {
        io.to(room).emit('update opponent completion', player)
    })
}

module.exports = { initialise };
