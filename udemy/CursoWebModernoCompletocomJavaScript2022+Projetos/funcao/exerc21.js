function valorPlanoSaude(idade) {
    const base = 100
    if (idade < 10) {
        console.log(80 + base)
    } else if (idade >= 10 && idade <= 30) {
        console.log(50 + base)
    } else if (idade > 30 && idade <= 60) {
        console.log(95 + base)
    } else {
        console.log(130 + base)
    }
}
valorPlanoSaude(3)
valorPlanoSaude(15)
valorPlanoSaude(33)
valorPlanoSaude(300)