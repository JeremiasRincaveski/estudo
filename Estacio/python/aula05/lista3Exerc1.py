nota = int(input('informe a nota: '));
compara = False
if nota >= 0 and nota <=10:
        compara = True
while compara == False:
    print('valor invalido')
    nota = int(input('informe a nota \nnota: '));
    if nota >= 0 and nota <=10:
        compara = True

print('nota = ', nota)