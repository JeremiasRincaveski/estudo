nota1 = parseFloat(lines.shift())
nota2 = parseFloat(lines.shift())
media = ((nota1 * 3.5) + (nota2 * 7.5)) / 11
console.log("MEDIA = " + media.toFixed(5))