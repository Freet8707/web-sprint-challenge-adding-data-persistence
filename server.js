const express = require('express');

const server = express();

const projRoute = require('./routes/proj-router');

server.use(express.json());

server.get('/', (req, res) => {
    return res.json({ message: "Server up and running ! Move into /api/projects!"})
})

server.use('/api/projects', projRoute);

module.exports = server