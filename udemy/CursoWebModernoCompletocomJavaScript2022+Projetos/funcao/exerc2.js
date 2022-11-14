//2 jeitos de verificar se os lados do triangulos são iguais
var triangulo = [1, 1, 1]
if (triangulo[0] == triangulo[1] &&
    triangulo[0] == triangulo[2] &&
    triangulo[1] == triangulo[2]) {
    console.log("equilatero")
} else if (triangulo[0] == triangulo[1] || triangulo[2] == triangulo[1]) {
    console.log("isosceles")
} else {
    console.log("escaleno")
}

function triangulo1(a = 0, b = 0, c = 0) {
    if (a == b && a == c) {
        console.log("equilatero")
    } else if (a == b || c == b) {
        console.log("isosceles")
    } else {
        console.log("escaleno")
    }
}

triangulo1(1)