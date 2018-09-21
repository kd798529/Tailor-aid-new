const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const knex = require('knex');
const cors = require('cors');

const server = express();
server.use(morgan('combined'));
server.use(helmet());
server.use(express.json());


// routes
server.get('/', (req, res) => {
    res.send('Hello welcome to TailorAid');
})


// server
const PORT = 3300;
server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})