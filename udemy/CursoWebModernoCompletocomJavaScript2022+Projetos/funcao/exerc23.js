function calculaMedia(codigo, nota1 = 0, nota2 = 0, nota3 = 0) {
    if (nota1 >= nota2 && nota1 >= nota3) {
        const notaMedia = media(nota1, nota2, nota3)
        if (notaMedia >= 5) {
            console.log(`codigo do aluno ${codigo}\nnota 1:${nota1}\nnota 2:${nota2}\nnota 3:${nota3}\nmedia: ${notaMedia}\nAPROVADO`)
        } else {
            console.log("REPROVADO")
        }
    } else if (nota2 >= nota3) {
        if (media(nota2, nota1, nota3) >= 5) {
            console.log(`codigo do aluno ${codigo}\nnota 1:${nota1}\nnota 2:${nota2}\nnota 3:${nota3}\nmedia: ${media(nota2, nota1, nota3)}\nAPROVADO`)
        } else {
            console.log("REPROVADO")
        }
    } else if (nota3 >= 2) {
        if (media(nota3, nota2, nota1) >= 5) {
            console.log(`codigo do aluno ${codigo}\nnota 1:${nota1}\nnota 2:${nota2}\nnota 3:${nota3}\nmedia: ${media(nota3, nota2, nota1)}\nAPROVADO`)
        } else {
            console.log("REPROVADO")
        }
    }
}
function media(maiorNota, nota1, nota2) {
    return ((maiorNota * 4) + (nota1 * 3) + (nota2 * 3)) / 10
}

calculaMedia(1, 10, 7, 7)
calculaMedia(2, 3, 10, 5)
calculaMedia(3, 4, 4, 10)
calculaMedia(4, 4, 4, 4)