const request = require('supertest')
const { server } = require('../server')

describe('Api route testing', () => {
    let api;
    let port = 4000;
    let body = {
        username: 'Rameez',
        score: '220'
    };


    beforeAll(() => {
        api = server.listen(port, () => console.log(`Test-server running on port ${port}`))
    })

    // test('Post request responds successfully with status 201', (done)=>{
    //     request(api)
    //     .post('/highscores')
    //     .send(body)
    //     .set('Accept', /application\/json/)
    //     .expect(201,done)
    // })

    test('Get request responds successfully with status 200', (done)=>{
        request(api).get('/highscores').expect(200,done)
    })






    afterAll((done) => {
        api.close(done)
    })
})
