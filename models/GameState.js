class QuizState {
    constructor(category, difficulty, host, room, questions) {
        this.room = room;
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
        this.gameStarted = false;
    }
}

module.exports = { QuizState };
