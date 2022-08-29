import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const users = [];

const tweets = [];

let posts = [];


function updateTweets () {
    let allTweets = [...tweets];

    allTweets.forEach(tweet => {
        let user = users.find(obj => obj.username === tweet.username);
        tweet.avatar = user.avatar;
    });

    posts = allTweets.slice(-3);
}


server.post('/sign-up', (req, res) => {
    const userLogin = req.body;
    
    users.push(userLogin);
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;

    tweets.push(tweet);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    updateTweets();
    res.send(posts);
});


server.listen(5000, () => {
    console.log('Server online ');
})