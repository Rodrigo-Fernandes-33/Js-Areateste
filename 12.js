var idade = 69
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
            console.log('Não Vota')
} else if (idade >= 18 || idade < 65) {
        console.log('Voto Obrigatorio')
    } else {
        console.log('Voto Opicional')
    }