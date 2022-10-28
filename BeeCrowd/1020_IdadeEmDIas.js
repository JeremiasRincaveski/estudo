dias = parseInt(lines.shift())
ano = 0
mes = 0
dia = 0
while (dias > 0) {
    if (dias >= 365) {
        ano++
        dias = dias - 365
    } else if (dias >= 30) {
        mes++
        dias = dias - 30
    } else {
        dia = dias
        dias = 0
    }
}
console.log(ano + ' ano(s)')
console.log(mes + ' mes(es)')
console.log(dia + ' dia(s)')