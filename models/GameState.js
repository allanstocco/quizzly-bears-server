class GameState {
    constructor(category, difficulty, host, roomName, questions) {
        this.roomName = roomName;
        this.category = category;
        this.difficulty = difficulty;
        this.host = host;
        this.users = [
            {
                name: host,
                score: 0,
                hasCompletedQuiz: false
            }
        ];
        this.questionNumber = 1;
        this.questions = questions;
        this.isGameStarted = false;
    }
}

module.exports = { GameState };