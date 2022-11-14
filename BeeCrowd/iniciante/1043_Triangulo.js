linha = lines.shift()
linha = linha.split(' ')
a = parseFloat(linha[0])
b = parseFloat(linha[1])
c = parseFloat(linha[2])
let perimetro
let area
if ((b - c) < a && a < (b + c) && (a - c) < b && b < (a + c) && (a - b) < c && c < (a + b)) {
    perimetro = a + b + c
    console.log("Perimetro = " + perimetro.toFixed(1))
} else {
    area = ((a + b) * c) / 2.0
    console.log("Area = " + area.toFixed(1))
}