function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(quantidade * 3);
            break;
        case 200:
            console.log(quantidade * 4)
            break;
        case 300:
            console.log(quantidade * 5.5)
            break;
        case 400:
            console.log(quantidade * 7.5)
            break;
        case 500:
            console.log(quantidade * 3.5)
            break;
        case 600:
            console.log(quantidade * 2.8);
            break;
        default:
            console.log("codigo invalido")
            break;
    }
}
cardapio(100,2)
cardapio(200,2)
cardapio(300,2)
cardapio(400,2)
cardapio(500,2)
cardapio(600,2)
cardapio(50,2)