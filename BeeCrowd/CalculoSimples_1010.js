Idpeca1 = parseInt(lines.shift())
numeroDePecas1 = parseInt(lines.shift())
valorPeca1 = parseFloat(lines.shift())

Idpeca2 = parseInt(lines.shift())
numeroDePecas2 = parseInt(lines.shift())
valorPeca2 = parseFloat(lines.shift())

valorPagar = ((numeroDePecas1 * valorPeca1) + (numeroDePecas2 * valorPeca2))

console.log("VALOR A PAGAR: R$ " + valorPagar.toFixed(2))