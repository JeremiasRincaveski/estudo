function fatorar(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorar(numero - 1)
    }
}

function fatora(numero) {
    let soma = 1
    while (numero > 0) {
        soma *= numero
        numero--
        if (numero == 0) {
            return soma
        }
    }
}
console.log(fatorar(12));
console.log(fatora(12));