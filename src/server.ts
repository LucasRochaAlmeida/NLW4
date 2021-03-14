/*
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D
*/

import express from 'express';

const app = express()

/* 
GET = buscar
POST = salvar
PUT = alterar
DELETE = deletar
PATCH = alteração específica
*/

//yarn dev para rodar a aplicação

app.get('/', (req, res) => {
    return res.send('Hello world')
})

app.post('/', (req, res) => {
    return res.json({message: 'Os dados foram salvos com sucesso!'})
})

app.listen(3333, () => console.log("server is running!"))