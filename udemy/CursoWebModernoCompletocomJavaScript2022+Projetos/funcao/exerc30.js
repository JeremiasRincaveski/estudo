function maioMenor(vetor){
    let menor = vetor[0], maior = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    console.log(`maior valor: ${maior}\nmenor valor: ${menor}`);
}
Array = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
maioMenor(Array)