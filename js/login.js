const correo = document.getElementById('emailinput');
const clave = document.getElementById('passwordinput');
const boton = document.getElementById('button');
const form = document.getElementById('formu');
const parrafo = document.getElementById('warnings');

//usando jquery para validar

$('form').submit( function (e) {
    e.preventDefault()
let warnings = ""
let entrar = false
let rayasemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
parrafo.innerHTML = ""

if(!rayasemail.test(form[0].value)){
    warnings += `El email no es valido <br>`
    entrar = true
}
if(form[1].value.length < 8){
     warnings += `La contraseña no es valida <br>`
     entrar = true
}

if(entrar){
        parrafo.innerHTML = warnings
}else{
        parrafo.innerHTML = "Bienvenido"
        console.log('Enviado')
        e.target.reset();
    }

});