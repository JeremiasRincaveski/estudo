function fruta(valor) {
    switch (valor) {
        case "maca":
            console.log("não vendemos macas aqui")
            break;
        case "kiwis":
            console.log("estamos em falta de kiwis")
            break;
        case "melancia":
            console.log("3 reais o quilo da melancia")
            break;
        default:
            console.log("fruta invalida")
            break;
    }
}

fruta("maca")
fruta("kiwis")
fruta("melancia")
fruta("maaaca")