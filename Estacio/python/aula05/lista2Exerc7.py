valor1 = int(input('numero 1: '))
valor2 = int(input('numero 2: '))
valor3 = int(input('numero 3: '))
auxMaior = 0;
auxMenor = 0;

if valor1 > auxMaior:
    auxMaior = valor1;
if valor2 > auxMaior:
    auxMaior = valor2;
if valor3 > auxMaior:
    auxMaior = valor3;

auxMenor = auxMaior

if valor1 < auxMenor:
    auxMenor = valor1;
if valor2 < auxMenor:
    auxMenor = valor2;
if valor3 < auxMenor:
    auxMenor = valor3;

print('maior valor: ', auxMaior)
print('menor valor: ', auxMenor)