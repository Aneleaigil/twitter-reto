var enviar= document.getElementById('btn');
var count=document.getElementById('nros');
  validar(false);
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
    validar(false);

 }

function validar(texto){
 
 if(texto==false){
 enviar.disabled = true;
 enviar.classList.add('btnD');
 enviar.classList.remove('btnE');
 } else{
   enviar.disabled = false;
 enviar.classList.add('btnE');
 enviar.classList.remove('btnD')
}
}
function contar() {
    var valor=document.getElementById('comment').value;
    var max = "140"; 
    var letras=document.getElementById('nros').value;
    var long=letras.length;
    valor.innerHTML=max-long
}
     
