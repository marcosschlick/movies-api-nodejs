/*
import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.write('oi')

    return response.end()
})

server.listen(3333)
*/

import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database.postgres.js'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

// GET -> buscar um ou vários registros
// POST -> ciar um registro
// PUT -> alterar um registro
// DELLETE -> deletar um registro

// Route Parameter -> parâmetro dentro da rota `:id`
// Request Body -> corpo da requisição usado para `Post` e `Put`
// Query ou SearcH Params -> filtrar dados, normalmente usando em rotas de busca,

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body
    await database.create({
        // title: title,
        // description: description,
        // duration: duration
        title,
        description,
        duration
    })
    // 201 ->  algo foi criado
    return reply.status(201).send()
})

server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)
    return videos
})

server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id 
    const { title, description, duration } = request.body

    const video = await database.update(videoId, {
        title,
        description,
        duration
    })

    // 204 -> a respota teve sucesso mas o corpo é vazio
    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id 

    await database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333
})

