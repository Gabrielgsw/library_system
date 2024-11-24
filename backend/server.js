import express from 'express'

const app = express();

//utilizar JSON
app.use(express.json());

const livros = [];

//Post
app.post('/books',(req,res) =>{
    livros.push(req.body);
    res.status(201).json(req.body)
})

//Get
app.get('/books',(req,res) =>{
    res.status(200).json(livros);
})

app.listen(3000);