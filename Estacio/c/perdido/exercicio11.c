#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int valor1,valor2,valor3,valor4,valor5,aux = 9999999;
    printf("insira o valor: ");
    scanf("%d", &valor1);
    printf("insira o valor: ");
    scanf("%d", &valor2);
    printf("insira o valor: ");
    scanf("%d", &valor3);
    printf("insira o valor: ");
    scanf("%d", &valor4);
    printf("insira o valor: ");
    scanf("%d", &valor5);

    if (valor1 < aux)
    {
        aux = valor1;
    }
    if (valor2 < aux)
    {
        aux = valor2;
    }
    if (valor3 < aux)
    {
        aux = valor3;
    }
    if (valor4 < aux)
    {
        aux = valor4;
    }
    if (valor5 < aux)
    {
        aux = valor5;
    }
    
    printf("menor valor eh %d\n",aux);

    system("PAUSE");
    return 0;
}