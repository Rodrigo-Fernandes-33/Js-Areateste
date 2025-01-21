function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','Homem Novo.jpg')
                } else if (idade < 32) {
                img.setAttribute('src','Homem.jpg')
                } else if (idade < 50) {
                img.setAttribute('src', 'Homem.jpg')    
                } else {
                img.setAttribute('src', 'Homem Velho.jpg')
                }
            } else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src','Mulher Nova.jpg')
                } else if (idade < 32) {
                img.setAttribute('src', 'Mulher.jpg')    
                } else if (idade < 50) {
                img.setAttribute('src', 'Mulher.jpg')
                } else {
                img.setAttribute('src', 'Mulher Velha.jpg')
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
}