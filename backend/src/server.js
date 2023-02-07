const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://kevin:226921@cluster0.ebwwlc4.mongodb.net/tindev?retryWrites=true&w=majority', {useNewUrlParser: true}, mongoose.set('strictQuery', true));

server.use(express.json())
server.use(routes);
server.listen(3333);