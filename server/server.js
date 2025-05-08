import express from 'express';
import mongoose from 'moongose';
import 'dotenv/config'

const server = express();
let PORT = 3000;

mongoose.connect(process.env.DB_LOCATION,{
    autoIndex: true
})

server.listen(PORT, () => {
    console.log('listening on port -> '+ PORT);
})
//mongodb+srv://bhawana27:<db_password>@blog-cluster.phzlosv.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster