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

app.listen(3333, () => console.log("server is running!"))