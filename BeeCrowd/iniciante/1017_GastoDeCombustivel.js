const kmL = 12
hora = parseInt(lines.shift())
hmH = parseInt(lines.shift())
litro = (hmH / kmL) * hora
console.log(litro.toFixed(3))