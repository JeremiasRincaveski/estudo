function compraCarro(valor) {
    switch (valor) {
        case "hatch":
            console.log("compra efetuada com sucesso");
            break;
        case "sedans":
            console.log("tem certeza que não prefere esse modelo");
            break;
        case "motocicletas":
            console.log("tem certeza que não prefere esse modelo");
            break;
        case "caminhonetes":
            console.log("tem certeza que não prefere esse modelo");
            break;
        default:
            console.log("não trabalhamos com esse modelo");
            break;
    }
}

compraCarro("hatch")
compraCarro("sedans")
compraCarro("motocicletas")
compraCarro("caminhonetes")
compraCarro("sedaans")