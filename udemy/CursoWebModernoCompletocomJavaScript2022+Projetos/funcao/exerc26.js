function encontraPar(valor) {
    let i = 1
    while (i <= valor) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
}
encontraPar(20)