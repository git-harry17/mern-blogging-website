import express from 'express';
import mongoose from 'moongose';

const server = express();
let PORT = 3000;

mongoose.connect()

server.listen(PORT, () => {
    console.log('listening on port -> '+ PORT);
})