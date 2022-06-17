
const express = require('express');

const app = express();

const port = 3000;

const router = require('./router');



app.use(express.json());
app.use(router);

//Levantar servidor
app.listen(port, ()=> {console.log("Servidor levantado en el puerto ", port)});

