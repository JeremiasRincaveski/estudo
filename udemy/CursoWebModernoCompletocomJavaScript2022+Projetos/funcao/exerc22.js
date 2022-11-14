function anuidadeAssociacao(mes, anuidade) {
    const taxa = (5 / 100) + 1
    if (mes == 1) {
        return 0
    } else {
        let montande = anuidade * Math.pow(taxa, mes - 1)
        console.log(`valor a ser pagp = ${montande.toFixed(2)}`)
    }
}
anuidadeAssociacao(3,100)