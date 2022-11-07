numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros);

for (const i in numeros) {
    if ((numeros[i] % 2) == 0) {
        console.log(numeros[i]);
    }
}

for (const i in numeros) {
    if ((numeros[i] % 2) != 0) {
        console.log(numeros[i]);
    }
}