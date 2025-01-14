function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'imagem/manha.png'
    document.body.style.background = '#4d6a7a'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'imagem/tarde.jpg'
    document.body.style.background = '#a4583e'
} else { 
    //BOA NOITE
    img.src = 'imagem/noite.jpg'
    document.body.style.background = '#436375'
} 
}

