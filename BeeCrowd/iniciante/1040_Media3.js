linha = lines.shift()
linha = linha.split(' ')
n1 = parseFloat(linha[0])
n2 = parseFloat(linha[1])
n3 = parseFloat(linha[2])
n4 = parseFloat(linha[3])
mediaFinal = 0
media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
console.log('Media: ' + media.toFixed(1));
if (media >= 7 ) {
    console.log('Aluno aprovado.');
} else if (media < 5){
    console.log('Aluno reprovado.');
} else {
    console.log('Aluno em exame.');
    provaFinal = parseFloat(lines.shift())
    console.log('Nota do exame: ' + provaFinal.toFixed(1));
    mediaFinal = (media + provaFinal) / 2
    if (mediaFinal >= 5) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log('Media final: ' + mediaFinal.toFixed(1));
}