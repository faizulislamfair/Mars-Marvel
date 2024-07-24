const express = require('express');
const cors = require('cors');
const summary = require('node-summarizer');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pqumcav.mongodb.net/?retryWrites=true&w=majority`;



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {
    try {
        const documentCollection = client.db('marsMarvel').collection('marsDocs');
        const feedbackCollection = client.db('marsMarvel').collection('feedback');
        const marsRoverMissionImagesCollection = client.db('marsMarvel').collection('roverMissionImages');
        const quizTopicsCollection = client.db('marsMarvel').collection('quizTopics');


        app.get('/', (req, res) => {
            res.send(`<div>
            <h1 style="display: flex;
            justify-content: center;
            align-items: center;
            height: 70vh;
            ">Mars Marvel!</h1>
            </div>
            `);
        })


        app.get('/document_categories', async (req, res) => {
            const query = {};
            const cursor = documentCollection.find(query);
            const marsDocs = await cursor.toArray();
            res.send(marsDocs);
        })


        app.get('/document_category/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const document = await documentCollection.findOne(query);
            res.send(document);
        })


        app.get('/quiz_topics', async (req, res) => {
            const query = {};
            const cursor = quizTopicsCollection.find(query);
            const marsQuizzes = await cursor.toArray();
            res.send(marsQuizzes);
        })


        app.get('/quiz_topics/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const quiz = await quizTopicsCollection.findOne(query);
            res.send(quiz);
        })




        app.get('/images', async (req, res) => {
            const query = {};
            const cursor = marsRoverMissionImagesCollection.find(query);
            const roverMissionImages = await cursor.limit(21).toArray();
            res.send(roverMissionImages);
        })



        app.post('/feedback', async (req, res) => {
            const feedback = req.body;
            // console.log(feedback);
            const result = await feedbackCollection.insertOne(feedback);
            res.send(result);
        })




        app.post('/api/summarize', (req, res) => {
            const { text } = req.body;

            // Use the node-summarizer package to summarize the text
            summarizer.summarize(text, (error, summary) => {
                if (error) {
                    console.error('Error summarizing text:', error);
                    res.status(500).json({ error: 'An error occurred while summarizing the text.' });
                } else if (!summary) {
                    console.error('Summary is empty or undefined.');
                    res.status(400).json({ error: 'Unable to generate a summary for the provided text.' });
                } else {
                    res.json({ summarizedText: summary });
                }
            });
        });


    }
    finally {

    }
}

run().catch(err => console.log(err));




app.listen(port, () => {
    console.log(`Mars Marvel is listening on port: ${port}`);
})