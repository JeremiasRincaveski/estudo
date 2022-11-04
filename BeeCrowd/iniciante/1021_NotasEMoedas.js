valor = parseFloat(lines.shift()) * 100
nota100 = 0
nota50 = 0
nota20 = 0
nota10 = 0
nota5 = 0
nota2 = 0
moeda1 = 0
moeda0_50 = 0
moeda0_25 = 0
moeda0_10 = 0
moeda0_05 = 0
moeda0_01 = 0
while ((0 <= valor) && (valor <= 100000000)) {
    if (valor >= 10000) {
        nota100++
        valor = valor - 10000
    } else if (valor >= 5000) {
        nota50++
        valor = valor - 5000
    } else if (valor >= 2000) {
        nota20++
        valor = valor - 2000
    } else if (valor >= 1000) {
        nota10++
        valor = valor - 1000
    } else if (valor >= 500) {
        nota5++
        valor = valor - 500
    } else if (valor >= 200) {
        nota2++
        valor = valor - 200
    } else if (valor >= 100) {
        moeda1++
        valor = valor - 100
    } else if (valor >= 50) {
        moeda0_50++
        valor = valor - 50
    } else if (valor >= 25) {
        moeda0_25++
        valor = valor - 25
    } else if (valor >= 10) {
        moeda0_10++
        valor = valor - 10
    } else if (valor >= 5) {
        moeda0_05++
        valor = valor - 5
    } else {
        moeda0_01 = parseInt(valor)
        valor = - 1
    }
}
console.log('NOTAS:')
console.log(nota100 + ' nota(s) de R$ 100.00')
console.log(nota50 + ' nota(s) de R$ 50.00')
console.log(nota20 + ' nota(s) de R$ 20.00')
console.log(nota10 + ' nota(s) de R$ 10.00')
console.log(nota5 + ' nota(s) de R$ 5.00')
console.log(nota2 + ' nota(s) de R$ 2.00')
console.log('MOEDAS:')
console.log(moeda1 + ' moeda(s) de R$ 1.00')
console.log(moeda0_50 + ' moeda(s) de R$ 0.50')
console.log(moeda0_25 + ' moeda(s) de R$ 0.25')
console.log(moeda0_10 + ' moeda(s) de R$ 0.10')
console.log(moeda0_05 + ' moeda(s) de R$ 0.05')
console.log(moeda0_01 + ' moeda(s) de R$ 0.01')