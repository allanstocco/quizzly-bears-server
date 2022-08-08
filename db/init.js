require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;

const init = async () => {
    try {
        let client = await MongoClient.connect("mongodb+srv://elliotetal:elliotandthefunkybunch@cluster0.gj3brsj.mongodb.net/?retryWrites=true&w=majority");
        console.log('connected to database!');
        return client.db("quizserver");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { init };
