linha = lines.shift()
linha = parseInt(linha.split(" "))
if (linha[0] > linha[1]) {
    maior = linha[0]
    menor = linha[1]
} else {
    maior = linha[0]
    menor = linha[1]
}
maior % menor == 0 ? console.log("Sao Multiplos") : console.log("Nao sao Multiplos");