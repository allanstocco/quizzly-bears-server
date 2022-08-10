const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/highscores')

router.get('/', (req, res) => res.json({ message: 'Welcome' }));;
router.get("/highscores", scoresController.getAll);

module.exports = router;
