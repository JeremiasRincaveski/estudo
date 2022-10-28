a = parseFloat(lines.shift())
b = parseFloat(lines.shift())
c = parseFloat(lines.shift())
triangulo = (a * c) / 2
circulo = 3.14159 * Math.pow(c, 2)
trapezio = ((a + b) * c) / 2
quadrado = b * b
retangulo = a * b
console.log('TRIANGULO: '+ triangulo.toFixed(3))
console.log('CIRCULO: '+ circulo.toFixed(3))
console.log('TRAPEZIO: '+ trapezio.toFixed(3))
console.log('QUADRADO: '+ quadrado.toFixed(3))
console.log('RETANGULO: '+ retangulo.toFixed(3))