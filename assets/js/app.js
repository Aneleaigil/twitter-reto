function add(){
    var textoUser=document.getElementById('comment').value;
    if(textoUser.length>0){
    document.getElementById('comment').value="";
    var newTexto=document.createElement('div');
    var cont=document.getElementById('cont');
    var paragraph=document.createElement('p');
    var nodoText=document.createTextNode(textoUser)
    paragraph.appendChild(nodoText);
    newTexto.appendChild(paragraph);
    cont.appendChild(newTexto);

    }else{

alert("Por favor introducir un texto valido")
 }
    }
    