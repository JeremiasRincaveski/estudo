segundos = parseInt(lines.shift())
hora = 0
min = 0
seg = 0
while (segundos > 0) {
    if (segundos >= 3600) {
        hora++
        segundos = segundos - 3600
    } else if (segundos > 60) {
        min++
        segundos = segundos - 60
    } else {
        seg = segundos
        segundos = 0
    }
}
console.log(hora + ':' + min + ':' + seg)