//altura em cm
function verificaAltura(primeiraAltura, primeiraTaxaCrescimento, segundaAltura, segundaTaxaCrescimento) {
    if (primeiraAltura > segundaAltura) {
        console.log("primeira criança é maior")
        const ano = verificaCrescimento(primeiraAltura, primeiraTaxaCrescimento, segundaAltura, segundaTaxaCrescimento)
        if (ano != undefined) {
            console.log(`A segunda criança ira ultrapassar a primeira em ${ano} ano(s)`)
        }
        console.log("")
    } else if (segundaAltura > primeiraAltura) {
        console.log("segunda criança é maior")
        const ano = verificaCrescimento(segundaAltura, segundaTaxaCrescimento, primeiraAltura, primeiraTaxaCrescimento)
        if (ano != undefined) {
            console.log(`A primeira criança ira ultrapassar a segunda em ${ano} ano(s)`)
        }
        console.log("")
    }
}
function verificaCrescimento(primeiraAltura, primeiraTaxaCrescimento, segundaAltura, segundaTaxaCrescimento) {
    let crescimentoPrimeiraCrianca = primeiraAltura
    let crescimentoSegundaCrianca = segundaAltura
    let tempo = 0

    for (let i = 0; i < 100; i++) {
        crescimentoPrimeiraCrianca += primeiraTaxaCrescimento
        crescimentoSegundaCrianca += segundaTaxaCrescimento
        tempo++
        if (crescimentoSegundaCrianca >= crescimentoPrimeiraCrianca) {
            return tempo
        }
    }
}
verificaAltura(100,1,30,20)
verificaAltura(80,23,101,20)
verificaAltura(80,20,101,20)