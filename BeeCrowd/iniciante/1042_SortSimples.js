linha = lines.shift()
linha = linha.split(' ')
a = parseInt(linha[0])
b = parseInt(linha[1])
c = parseInt(linha[2])

if (a < b && a < c) {
    console.log(a);
    if (b < c) {
        console.log(b);
        console.log(c);
    } else {
        console.log(c);
        console.log(b);
    }
} else if (b < c) {
    console.log(b);
    if (a > c) {
        console.log(a);
        console.log(c);
    } else {
        console.log(c);
        console.log(a);
    }
} else {
    console.log(c);
    if (a < b) {
        console.log(a);
        console.log(b);
    } else {
        console.log(b);
        console.log(a);
    }
}

console.log("\n");
console.log(a);
console.log(b);
console.log(c);
}