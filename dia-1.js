let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

verificarValor(numeroUm, stringUm)
verificarTipo(numeroTrinta, stringTrinta)
verificarValor(numeroDez, stringDez)

function verificarValor(valor1, valor2) {
    if (valor1 == valor2) {
        console.log('As variáveis tem o mesmo valor')
    } else {
        console.log('As variáveis não tem o mesmo valor')
    }
}

function verificarTipo(tipo1, tipo2) {
    if (tipo1 === tipo2) {
        console.log('As variáveis tem o mesmo tipo')
    } else {
        console.log('As variáveis são de tipos diferentes')
    }
}