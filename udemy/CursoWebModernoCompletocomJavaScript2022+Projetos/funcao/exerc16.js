function calculadora(valorA, operador, valorB) {
    switch (operador) {
        case "+":
            console.log(valorA + valorB)
            break;
        case "-":
            console.log(valorA - valorB)
            break;
        case "*":
            console.log(valorA * valorB)
            break;
        case "/":
            console.log(valorA / valorB)
            break;
        default:
            console.log("operador invalido")
            break;
    }
}
calculadora(2,"+",3)
calculadora(2,"-",3)
calculadora(2,"*",3)
calculadora(2,"/",3)
calculadora(2,"%",3)