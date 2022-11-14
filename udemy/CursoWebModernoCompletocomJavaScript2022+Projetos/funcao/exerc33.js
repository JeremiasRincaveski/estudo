function concatena(vetor1, vetor2) {
    const resultado = vetor1.concat(vetor2)
    console.log(resultado);
}
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]
concatena(vetorDouble,vetorInteiro)
concatena(vetorDouble,vetorString)
concatena(vetorString,vetorString)