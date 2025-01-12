var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)
//
switch (diaSem) {
    
//se nao tiver obreak ele vai testar todos cases mesmo que ja tenha encontrato o correto//
    case 0: 
    console.log('Domingo')
    break

    case 1: 
    console.log('Segunda')
    break
    
    case 2: 
    console.log('Terca')
    break
    case 3: 
    console.log('Quarta')
    break
    case 4: 
    console.log('Quinta')
    break
    case 5: 
    console.log('Sexta')
    break
    case 6: 
    console.log('Sábado')
    break
    default: 
    console.log('Erro (dia inválido)') //default serve para valores invalidos que não tem na lsita ou algo assim.
    break
}
