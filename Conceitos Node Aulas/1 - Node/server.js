/*HTTP METODOS
    *Verbos


Query Params
Get -> Listar


Post -> Criar
Put -> Editar Varios
Patch -> Editar um
Delete -> Deletar

977526000

*/

import express, { response } from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json(users)

})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(201).json(user)

})

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).json ({ message: "Usuario deletado com sucesso" })
})

app.listen(3000)

//http://localhost:3000
//req = request - requisição
//res = response - resposta

/*Mongo-DB
    user: allclaro
    pw: HPXAb6SUNr
*/


/*
    ok - Criar
    ok - Ler
    ok - Deletar
    ok - Editar

    CRUD
    CREATE
    READ
    UPDATE
    DELETE


Rodar Prisma e Node
    npx prisma studio
    npm run dev

*/