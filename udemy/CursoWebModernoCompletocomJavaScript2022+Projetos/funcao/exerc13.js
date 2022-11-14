function diaSemana(valor) {
    switch (valor) {
        case 1:
            console.log("domingo")
            break;
        case 2:
            console.log("segunda")
            break;
        case 3:
            console.log("terca")
            break;
        case 4:
            console.log("quarta")
            break;
        case 5:
            console.log("quinta")
            break;
        case 6:
            console.log("sexta")
            break;
        case 7:
            console.log("sabado")
            break;
        default:
            console.log("fora do dia da semana");
            break;
    }
}

diaSemana(1)
diaSemana(2)
diaSemana(3)
diaSemana(8)