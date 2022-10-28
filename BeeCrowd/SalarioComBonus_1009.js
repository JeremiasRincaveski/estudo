nome = lines.shift()
salario = parseFloat(lines.shift())
totalVendas = parseFloat(lines.shift())
total = (totalVendas * 0.15) + salario
console.log("TOTAL = R$ " + total.toFixed(2))