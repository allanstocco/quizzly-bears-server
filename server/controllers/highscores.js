const Highscore = require('../models/highscores');

async function getAll (req, res) {
    try {
        const posts = await Highscore.all
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).send({ err })
    }
}

module.exports = {getAll}
