vetor = []
function parImpar(array, quantidade) {
    let par = 0, impar = 0
    for (let i = 0; i < quantidade; i++) {
        array[i] = i
        if (array[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`quantida de numeros pares:${par}\nquantida de impar: ${impar}`);
}
parImpar(vetor,10)