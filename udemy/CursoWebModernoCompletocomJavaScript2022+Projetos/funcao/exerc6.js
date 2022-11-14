function simples(inicial, taxa, tempo) {
    let taxaConvert = taxa / 100
    let montande = inicial + (inicial * (taxaConvert * tempo))
    console.log(`montande do juros simples = ${montande.toFixed(2)}`)
}
function composto(inicial, taxa, tempo) {
    let taxaConvert = (taxa / 100) + 1
    let montande = inicial * Math.pow(taxaConvert, tempo)
    console.log(`montande do juros composto = ${montande.toFixed(2)}`)
}

simples(4000, 2, 24)
composto(100, 5, 2)