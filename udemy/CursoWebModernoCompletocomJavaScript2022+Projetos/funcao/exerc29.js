vetor = []
function parImpar(array, quantidade, primeiroIntervalo, segundoIntervalo) {
    let dentroIntervalo = 0, foraIntervalo = 0
    for (let i = 0; i < quantidade; i++) {
        array[i] = i
        if (array[i] >= primeiroIntervalo && array[i] <= segundoIntervalo) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`quantida de numeros dentro do intervalo de ${primeiroIntervalo} e ${segundoIntervalo}: ${dentroIntervalo}`);
    console.log(`quantida de numeros fora do intervalo de ${primeiroIntervalo} e ${segundoIntervalo}: ${foraIntervalo}`);
}
parImpar(vetor, 40, 10, 20)