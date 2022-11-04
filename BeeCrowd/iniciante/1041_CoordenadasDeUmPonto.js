x = 0
y = 0

linha = lines.shift()
linha = linha.split(' ')
x = parseFloat(linha[0]).toFixed(1)
y = parseFloat(linha[1]).toFixed(1)

if ((x == 0) && (y == 0)) {
    console.log('Origem');
} else if (x == 0) {
    console.log('Eixo Y');
} else if (y == 0) {
    console.log('Eixo X');
} else if ((x > 0) && (y > 0)) {
    console.log('Q1');
} else if ((x > 0) && (y < 0)) {
    console.log('Q4');
} else if ((x < 0) && (y > 0)) {
    console.log('Q2');
} else if ((x < 0) && (y < 0)) {
    console.log('Q3');
}