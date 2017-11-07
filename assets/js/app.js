var enviar= document.getElementById('btn');
var count=document.getElementById('nros');
  validar(false); // para tener el boton deshabilitado
function add(){
    var textoUser=document.getElementById('comment').value; 
    document.getElementById('comment').value="";
    var newTexto=document.createElement('div');
    var cont=document.getElementById('cont');
    var paragraph=document.createElement('p');
    var nodoText=document.createTextNode(textoUser)
    paragraph.appendChild(nodoText);
    newTexto.appendChild(paragraph);
    cont.appendChild(newTexto);
    validar(false); // para llamar la funcion 

 }

function validar(texto){ // funcion que valida el ingreso de texto
 
 if(texto==false){
 enviar.disabled = true;
 enviar.classList.add('btnD'); // cambia de color el boton
 enviar.classList.remove('btnE');
 } else{
   enviar.disabled = false;
 enviar.classList.add('btnE');
 enviar.classList.remove('btnD')
}
}
function contar() {
    var valor=document.getElementById('comment').value; // funcion contador con fallas (no me funciona aun)
    var max = "140"; 
    var letras=document.getElementById('nros').value;
    var long=letras.length;
    valor.innerHTML=max-long
}
     
