linha = lines.shift()
linha = linha.split(' ')
preco = 0
switch (linha[0]) {
    case '1':
        preco = 4 * linha[1]
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case '2':
        preco = 4.5 * linha[1]
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case '3':
        preco = 5 * linha[1]
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case '4':
        preco = 2 * linha[1]
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    case '5':
        preco = 1.5 * linha[1]
        console.log('Total: R$ ' + preco.toFixed(2));
        break;
    default:
        break;
}