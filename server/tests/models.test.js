// const {quizState} = require('../models/QuizState');
const Highscore = require('../models/highscores');
const {QuizState} = require('../models/QuizState');

const pg = require('pg');
jest.mock('pg');

const db = require('../dbConfig/init');


describe('Database tests', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())


    describe('all', () => {
        test('it resolves with highscores on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Highscore.all;
            expect(all).toHaveLength(3)
        })
    });
});


describe('create', () => {

        test('it creates new highscore on db query', async () => {
            let highScore = { username: 'Allan', score: 120 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ highScore ] });
            const result = await Highscore.updateScore('New Score');
            expect(result).toBeInstanceOf(Array)
        })

        test('it creates new highscore on db query with 201', async () => {
            let highScore = { username: 'Allan', score: 120 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ highScore ] });
            const result = await Highscore.updateScore('New Score');
            expect(201)

        })
    });



describe('Test models', () => {


    test('highscore test model', () => {
    const data = {id: 1, username: 'rameez', score: 150}
    const state = new Highscore(data);
    expect(state.username).toBe('rameez');
    expect(state.score).toBe(150);
    expect(state.id).toBe(1);
})


test('quizState test model', () => {
    const state = new QuizState('general knowledge', 'easy', 'harry', '3l5K2pqeA', ['a', 'b', 'c']);
    expect(state.category).toBe('general knowledge')
    expect(state.difficulty).toBe('easy')
    expect(state.host).toBe('harry')
    expect(state.room).toBe('3l5K2pqeA')
    expect(state.users).toBeInstanceOf(Array)
})
})
