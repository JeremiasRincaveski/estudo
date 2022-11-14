function verifica(ano) {
    if (ano % 400 == 0 || ano % 100 == 0 || ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(verifica(800));
console.log(verifica(300));
console.log(verifica(4));
console.log(verifica(2024));
console.log(verifica(3));
console.log(verifica(2023));