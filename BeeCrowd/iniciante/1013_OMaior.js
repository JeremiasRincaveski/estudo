entrada = lines.shift()
entrada = entrada.split(' ')
a = parseInt(entrada[0])
b = parseInt(entrada[1])
c = parseInt(entrada[2])
maiorInicio = (a + b + Math.abs(a - b)) / 2
maiorFinal = (maiorInicio + c + Math.abs(maiorInicio - c)) / 2
console.log(maiorFinal + ' eh o maior')