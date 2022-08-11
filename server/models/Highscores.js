const db = require('../dbConfig/init');

class Highscore {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.score = data.score
    }

    static get all(){
        return new Promise(async (res, req) => {
            try {
                let result = await db.query(`SELECT * FROM highscores ORDER BY score DESC;`);
                let users = result.rows.map(r => new Highscore(r))
                res(users)
            } catch (err) {
                req(`Error retrieving users: ${err.message}`)
            }
        })
    }
    static updateScore(username, score) {
        return new Promise (async (res, req) => {
            try {
                let lowestScore = await db.query("SELECT * FROM highscores ORDER BY score ASC LIMIT 1;")
                if(lowestScore.rows[0].score<score){
                    let updatedScore = await db.query(`UPDATE highscores SET username = $2, score=$3 WHERE id = $1 RETURNING *;`, [ lowestScore.rows[0].id, username, score ]);
                    let resolveScore = new Highscore(updatedScore.rows[0]);
                    res (resolveScore);
                } else {
                    res (lowestScore.rows)
                }
            } catch (err) {
                req('Error updating score');
            }
        });
    }
}

module.exports = Highscore;
