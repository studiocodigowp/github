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
    warnings += `<p class="msn" style="display:none">El email no es valido</p> <br>`
    entrar = true
    }
    if(form[1].value.length < 8){
     warnings += `<p class="msn" style="display:none">La contraseña no es valida</p> <br>`
     entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Bienvenido"
        console.log('Enviado')
        e.target.reset();
    }

    //agregando animacion
 $('.msn').show(1500);
 $('.msn').css({'padding': '0px 0px'});

});

