function novoSalario(salario,aumento) {
    return console.log(salario + (salario * (aumento / 100)));
}
function selecionaPlano(plano,salarioAtual) {
    switch (plano) {
        case "a":
            novoSalario(salarioAtual,10)
            break;
        case "b":
            novoSalario(salarioAtual,20)
            break;
        case "c":
            novoSalario(salarioAtual,30)
            break;
        default:
            console.log("plano ivalido")
            break;
    }
}
selecionaPlano("a",100)
selecionaPlano("b",100)
selecionaPlano("c",100)
selecionaPlano("d",100)