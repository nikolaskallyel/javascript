
function carregar( ){
var msg = window.document.getElementbyid('msg')
var img = window.document.getElementById('imagem')
var data = new date()
var hora = data.gethours()
msg.innerHTML = 'agora são $(hora).'
if(hora >= 0 && < 12) {
    //bom dia
    img.src
}
else if (hora >=12 && hora <18){
// boa tarde
}
else{
    //boa noite
}
}