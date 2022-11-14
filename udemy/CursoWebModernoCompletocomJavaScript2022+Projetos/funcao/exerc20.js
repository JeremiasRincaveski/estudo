let nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0

function calcularCedulas(valor) {
    if (valor >= 100) {
        nota100++
        valor -= 100
        calcularCedulas(valor)
    } else {
        calculaCedulasDe50(valor)
    }
}
function calculaCedulasDe50(valor) {
    if (valor >= 50) {
        nota50++
        valor -= 50
        calculaCedulasDe50(valor)
    } else {
        calculaCedulasDe10(valor)
    }
}
function calculaCedulasDe10(valor) {
    if (valor >= 10) {
        nota10++
        valor -= 10
        calculaCedulasDe10(valor)
    } else {
        calculaCedulasDe5(valor)
    }
}
function calculaCedulasDe5(valor) {
    if (valor >= 5) {
        nota5++
        valor -= 5
        calculaCedulasDe5(valor)
    } else {
        calculaCedulasDe1(valor)
    }
}
function calculaCedulasDe1(valor) {
    if (valor >= 1) {
        nota1++
        valor -= 1
        calculaCedulasDe1(valor)
    } else {
        return console.log(`${nota100} notas de 100\n${nota50} notas de 50\n${nota10} notas de 10\n${nota5} notas de 5\n${nota1} notas de 1\n`);
    }
}

calcularCedulas(166)