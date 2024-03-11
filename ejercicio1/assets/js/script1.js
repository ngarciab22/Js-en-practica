//Se asignan valores a formulario y errores
let form = document.getElementById('formulario')
let errorName = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');

//Se crea evento al hacer submit
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    errores(); //Limpia mensajes de error
    //Captura valores del formulario
    let nombre = document.getElementById('nombre').value 
    let mensaje = document.getElementById('mensaje').value
    let asunto = document.getElementById('asunto').value
    //Se llama a la arrow funciton de validación
    let resultado = validar(nombre, mensaje, asunto)
    if (resultado == true){ //De ser true se activa la función éxito
        exito();
    }
})
//Arrow function para limpiar mensajes de error
const errores = () => {
    errorName.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
}
//Arrow function para mensaje de éxito
const exito = () => {
    document.querySelector('.resultado').innerHTML = "Mensaje enviado con éxito!!!"  
}
//Arrow function de validación
const validar = (nombre, mensaje, asunto) => {
    let validacion = true;
    //Constante para definir caracteres del nombre
    const caracterName = /[a-z]/gim
    if (caracterName.test(nombre) == false){
        errorName.innerHTML = "El nombre es requerido"
        validacion = false;
    }
    //Constante para definir caracteres del mensaje
    const caracterMensaje = /[a-z]/gim
    if (caracterMensaje.test(mensaje) == false){
        errorMensaje.innerHTML = "El mensaje es requerido"
        validacion = false;
    }
    //Constante para definir caracteres del asunto
    const caracterAsunto = /[a-z]/gim
    if (caracterAsunto.test(asunto) == false){
        errorAsunto.innerHTML = "El asunto es requerido"
        validacion = false;
    }
    return validacion; //Devuelve true si todo es válido
}








