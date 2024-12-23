import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


const app = express();

//utilizar JSON
app.use(express.json());

//const livros = [];

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
app.get('/books',async(req,res) =>{

    const livros = await prisma.book.findMany()

    res.status(200).json(livros);
})


//Put books
app.put('/books/:id',async (req,res) =>{
    //livros.push(req.body);
    await prisma.book.create({
        where:{
            id:req.params.id
        },
        data:{
           title: req.body.title,
           autor: req.body.autor,
           description: req.body.description
        }
    })
    
    res.status(201).json(req.body)

})

//Put users

app.put('/user/:id',async (req,res) =>{
    
    await prisma.user.create({
        where:{
            id:req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            age: req.body.age

        }
    })
    
    

    res.status(201).json(req.body)

})

//Delete books

app.delete('/books/:id',async(req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).json({message: 'Livro deletado com sucesso! '})
})

//Delete users

app.delete('/user/:id',async(req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).json({message: 'Usuário deletado com sucesso! '})
})
app.listen(3000);