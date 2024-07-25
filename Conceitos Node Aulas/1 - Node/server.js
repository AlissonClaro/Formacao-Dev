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

app.use(express.json())

app.get('/usuarios/:Merlyn', (req, res) => {
    
    console.log (req)

    res.send ('Ola rota acessada com sucesso!')
})

app.post('/usuarios', (req, res) => {

    console.log (req)

    res.send ('Ola esta é a rota post!')
})

app.listen(3000)
//http://localhost:3000
//req = request - requisição
//res = response - resposta