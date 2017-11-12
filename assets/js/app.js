var enviar= document.getElementById('btn');
var count=document.getElementById('nros');
  validar(false); // para tener el boton deshabilitado


function add(){  // Funcion para agregar comentarios de usuario y guardarlos
    var textoUser=document.getElementById('comment').value; // se guarda lo que el usuario escribe
    document.getElementById('comment').value="";// se borra el area de texto despues de guardar lo que se escribio
    var newTexto=document.createElement('div'); // se crea el div donde van los comentarios del usuario
    var cont=document.getElementById('cont'); // se llama al div vacio creado en el html donde se contiene todo por su id
    var paragraph=document.createElement('p'); //se crea etiqueta p para guardar comentario de usuario despues de guardado
    var nodoText=document.createTextNode(textoUser) // se crea un nodo texto donde esta el valor de la p
    // se asignan padres a nodos hijos sueltos
    paragraph.appendChild(nodoText); 
    newTexto.appendChild(paragraph);
    cont.appendChild(newTexto);
    validar(false); // para llamar la funcion de habilitar y desabilitar el boton


}

function validar(texto){ // funcion que valida el ingreso de texto
 
 if(texto==false){ //con el argumento se hace un boleano para poder habilitar y desabilitar el boton 
 enviar.disabled = true; // boton habilitado
 enviar.classList.add('btnD'); // cambia de color el boton
 enviar.classList.remove('btnE'); // remueve la clase de color habilitado
 } else{

 enviar.disabled = false; //boton deshabilitado
 enviar.classList.add('btnE'); // cambia color 
 enviar.classList.remove('btnD') // remueve color anterior
}
}

function cuenta(){ // funcion para contar caracteres
 document.forms[0].letras.value=140-(document.forms[0].comment.value.length);
  //al formulario se le llama por el name se toma su valor y se le da el valor de 140 como parametro
   // y se le resta el largo del texto introducido con comment
  
 if (document.forms[0].comment.value.length!=0){  // se introduce un boleano para poder llamar a la funcion validar que esta solo en js                        
 validar(true)
  
 if (document.forms[0].comment.value.length>140){  
 validar(false)
}else{
    
if (document.forms[0].comment.value.length!=0){  // se introduce un boleano para poder llamar a la funcion validar que esta solo en js                        
 validar(true)

if (document.forms[0].comment.value.length>120 && document.forms[0].comment.value.length <= 130){ //Si pasa los 120 caracteres, mostrar el contador con OTRO color.
count.classList.add('contadorA');
count.classList.remove('contador');
count.classList.remove('contadorB');

}else{

count.classList.add('contador');
count.classList.remove('contadorA');
count.classList.remove('contadorB');
}

if(document.forms[0].comment.value.length>130 && document.forms[0].comment.value.length <= 140){ //Si pasa los 130 caracteres, mostrar el contador con OTRO color.
count.classList.add('contadorB');                               
count.classList.remove('contador');
count.classList.remove('contadorA');
 
 }                                  
}
}
}
}


