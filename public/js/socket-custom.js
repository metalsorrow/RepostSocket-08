var socket = io();
socket.on('connect', function(){
    console.log('Conectado en el servidor')
});

//Escuchar proceso
socket.on('disconnect', function(){
    console.log('Perdimons conexion con el servidor');
});



//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Marcos',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('respuesta server', resp);
})

//escuchar Informacion
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})