function verificar()
    ver data = new Date()
    ver ano = data.getFullYear()
    ver fano = document.getElementById('txtano')
    ver res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[Erro!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
}