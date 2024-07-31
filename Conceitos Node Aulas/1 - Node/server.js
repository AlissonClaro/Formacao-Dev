/*HTTP METODOS
    *Verbos


Query Params
Get -> Listar


Post -> Criar
Put -> Editar Varios
Patch -> Editar um
Delete -> Deletar



*/


import express, { request, response } from 'express'

const app = express()
const users = []


app.use(express.json())

app.get('/usuarios', (req, res) => {
    
    res.status(200).json (users)

})

app.post('/usuarios', (req, res) => {
    users.push (req.body)
    
    res.status (201).json ({ message: "Usuario criado com sucesso"})
})

app.listen(3000)
//http://localhost:3000
//req = request - requisição
//res = response - resposta

/*Mongo-DB
    user: allclaro
    pw: HPXAb6SUNr
*/