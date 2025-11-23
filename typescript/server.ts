import express from 'express';
const app = express();
const port = 3000;

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// route for handling requests from the Angular client
app.get('/api/hello', (req, res) => {
    res.json({ message: 
            'Hello world!' });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
