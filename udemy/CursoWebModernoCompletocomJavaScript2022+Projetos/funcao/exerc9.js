function arredondar(nota) {
    if (nota > 37) {
        if (nota % 5 > 2) {
            nota = nota + (5 - (nota % 5))
        }
    }
    return nota
}
function nota(valor){
    const nota = arredondar(valor)
    if (nota >= 40) {
        console.log("aluno passou");
    } else {
        console.log("aluno reprovou");
    }
}


nota(38)
nota(33)
nota(98)
nota(52)
nota(13)
nota(36)