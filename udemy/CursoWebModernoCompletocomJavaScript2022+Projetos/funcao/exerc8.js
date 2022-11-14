const jogos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function lebron(pontos) {
    const pontuacao = pontos.split(", ")
    let desempenho = Number(pontuacao[0])
    vetor = [0, 0]
    vetor[1] = Number(pontuacao[0])
    for (let i = 0; i < pontuacao.length; i++) {
        if (Number(pontuacao[i]) > desempenho) {
            desempenho = Number(pontuacao[i])
            vetor[0]++
        } else if (Number(pontuacao[i]) < vetor[1]) {
            vetor[1] = Number(pontuacao[i])
        }
    }
    console.log(`numero de vezes que se superou = ${vetor[0]}\n pior pontuação = ${vetor[1]}`)
}
lebron(jogos)