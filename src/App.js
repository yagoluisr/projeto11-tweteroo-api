import express from 'express';

const server = express();
server.use(express.json());

const user = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
]

const tweet = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]


server.post('/sign-up', (req, res) => {
    const userLogin = req.body;
    
    user.push(userLogin);
    res.send('OK');
});



server.listen(5000, () => {
    console.log('Server tá On !');
})