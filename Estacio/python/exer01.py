input('compara duas strings')
valor1 = input('string 1:')
valor2 = input('string 2:')

print("{} : {} caracteres".format(valor1, len(valor1)))
print("{} : {} caracteres".format(valor2, len(valor2)))

if len(valor1) == len(valor2):
    print("o numero de caracteres são iguais")
else:
    print("o numero de caracteres são diferentes")

if valor1 == valor2:
    print("as duas string são iguais")
else:
    print("as duas string são diferentes")

