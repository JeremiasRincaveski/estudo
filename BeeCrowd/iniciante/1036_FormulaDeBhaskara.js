linha = lines.shift()
linha = linha.split(' ')
a = parseFloat(linha[0]) 
b = parseFloat(linha[1]) 
c = parseFloat(linha[2]) 
delta = (Math.pow(b, 2)) - (4 * a * c)
if ((a !== 0) && (delta > 0)) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log('R1 = ' + x1.toFixed(5));
    console.log('R2 = ' + x2.toFixed(5));
} else {
    console.log('Impossivel calcular');
}