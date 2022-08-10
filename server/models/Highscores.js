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
}

module.exports = Highscore;
