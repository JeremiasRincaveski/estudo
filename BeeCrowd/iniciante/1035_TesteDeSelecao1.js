bc = false
da = false
cdab = false
cd = false
variavelA = false

linha = lines.shift()
linha = linha.split(' ')

a = parseInt(linha[0])
b = parseInt(linha[1])
c = parseInt(linha[2])
d = parseInt(linha[3])


if (b>c) {
    bc = true
}
if (d>a) {
    da = true
}
if ((c + d) > (a + b)) {
    cdab = true
}
if ((c > 0 ) && (d > 0)) {
    cd = true
}
if ((a % 2) == 0) {
    variavelA = true
}
if (bc && da && cdab && cd && variavelA) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}