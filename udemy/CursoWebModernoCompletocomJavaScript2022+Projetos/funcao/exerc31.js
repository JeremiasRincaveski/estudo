function valorNegativo(array) {
    let quantidaNegativo = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            quantidaNegativo++
        }
    }
    console.log(quantidaNegativo)
}
vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
valorNegativo(vetor)