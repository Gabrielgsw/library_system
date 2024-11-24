import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const app = express();

//utilizar JSON
app.use(express.json());

const livros = [];

//Post books
app.post('/books',async (req,res) =>{
    //livros.push(req.body);
    await prisma.book.create({
        data:{
           title: req.body.title,
           autor: req.body.autor,
           description: req.body.description
        }
    })
    
    res.status(201).json(req.body)

})

//Post users
app.post('/user',async (req,res) =>{
    
    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            age: req.body.age

        }
    })
    
    

    res.status(201).json(req.body)

})


//Get
app.get('/books',(req,res) =>{
    res.status(200).json(livros);
})

app.listen(3000);