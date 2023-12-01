const socket = io.connect();

socket.on('nuevo_correo', function (datos) {
    alert("nuevo correo conectado: " + datos.correo + ' con usuario: ' + datos.usuario)
})

socket.on('nuevo_mensaje', function (datos) {
    $('#cont_mensajes').append('<p><strong>' + datos.usuario + ': </strong>' + datos.mensaje + '</p>')
})

function login() {
    correo = $('#login_form  #correo').val();
    usuario = $('#login_form  #usuario').val();
    socket.emit('datos_usuario', { correo: correo, usuario: usuario });
}

function enviar_msj() {
    mensaje = $('#mensaje').val();
    usuario = $('#login_form  #usuario').val();
    socket.emit('send_mensaje', { mensaje: mensaje, usuario: usuario });
}