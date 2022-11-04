linha1 = lines.shift()
linha2 = lines.shift()
linha1 = linha1.split(' ')
linha2 = linha2.split(' ')
soma1 = linha1[1] * linha1[2]
soma2 = linha2[1] * linha2[2]
total = soma1 + soma2
console.log('VALOR A PAGAR: R$ ' + total.toFixed(2))