#include <stdlib.h>
#include <stdio.h>

int main(void)
{
    int valores[5], aux1, aux2 = 4;
    for (int i = 0; i < 5; i++)
    {
        printf("isnsira um valor: ");
        scanf("%d", &valores[i]);
    }

    for (int i = 0; i < 5; i++)
    {
        aux1 = valores[i];
        valores[i] = valores[aux2] ;
        valores[aux2] = aux1;
        aux2--;
        printf("%d\n", valores[1]);
    }
    printf("%d", valores[0]);
    printf("%d", valores[1]);
    printf("%d", valores[2]);
    printf("%d", valores[3]);
    printf("%d", valores[4]);
}