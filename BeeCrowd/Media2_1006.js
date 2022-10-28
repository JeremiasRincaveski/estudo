nota1 = parseFloat(lines.shift())
nota2 = parseFloat(lines.shift())
nota3 = parseFloat(lines.shift())
media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
console.log("MEDIA = " + media.toFixed(1))