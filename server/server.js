const express = require('express');
const socketIO = require('socket.io')
const http = require('http')

const path = require('path');
//socket.io no se ´puede conectar de forma directa con express,
// pero funcinan muy parecido, por lo que se puede agregar al
// momento de crear un nuevo coneccion en el constructor 
const app = express();
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta es la comunicacion de backend
module.exports.io = socketIO(server);


require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});