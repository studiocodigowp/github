// SELECTORES INDIVIDUALES
// getElementById(): selecciona el elemento por su atributo ID
// querySelector(): Selecciona el elemento con un selector CSS, devolviendo el primer elemento que coincida

//SELECTORES MULTIPLES
// getElementsByClassName(): Selecciona todos los elementos que tengan la clase especificada
// getElementsByTagName(): Selecciona todos los elementos por la etiqueta especificada
// querySelectorAll(): Selecciona todos los elementos con el selector CSS especificado

//------------------------------------------------------------------------
//                                Formulario - inicio
//------------------------------------------------------------------------

let form = document.getElementById("formulario");

formulario.addEventListener('submit', respuestaClick)
function respuestaClick(event){
    //creo el array
    let contactos1 = [];

    //creo mi clase constructor para que mas personas pueda enviar y guardar
    class Contacto1 {
        constructor(contact){
            this.nombreyapellido = contact.nombreyapellido;
            this.email = contact.email;
            this.telefono = contact.telefono;
            this.asunto = contact.asunto;
            this.quenecesitas = contact.quenecesitas;
        }
    }

    //configuro el evento por defecto
    event.preventDefault();
    const inputs = event.target.children;

    //indico de donde va tomar los valores
    contactos1.push(new Contacto1({
        nombreyapellido: formulario[0].value,
        email: formulario[1].value,
        telefono: formulario[2].value,
        asunto: formulario[3].value,
        quenecesitas: formulario[4].value
    }))

    //hago la instancia de borrar lo escrito y notifico
    event.target.reset();
    console.log(contactos1);
    alert('Tu mensaje ha sido enviado')

    //localstorage
localStorage.setItem('contacto', JSON.stringify(contactos1));
}

//------------------------------------------------------------------------
//                                Formulario - fin
//------------------------------------------------------------------------
