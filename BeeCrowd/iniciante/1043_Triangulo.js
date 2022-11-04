validaAB = false
validaAC = false
validaBC = false
aux = 0

linha = lines.shift()
linha = linha.split(' ')

a = linha[0]
b = linha[1]
c = linha[2]

if (!validaAB) {
    aux = a + b
    if (aux < c) {
        validaAB = true
    }
}
if (!validaAC) {
    aux = a + c
    if (aux < b) {
        validaAB = true
    }
}
if (!validaBC) {
    aux = c + b
    if (aux < a) {
        validaAB = true
    }
}
if (validaAB && validaBC && validaAC) {
    aux = a + b + c
    console.log("Perimetro = " + aux.toFixed(1));
} else {
    aux = ((a + b) * c) / 2
    console.log("Area = " + aux.toFixed(1));
}