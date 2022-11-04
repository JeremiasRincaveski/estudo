#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int valor;

    printf("digite um valor: ");
    scanf("%d", &valor);
    while (valor != 0)
    {
        printf("digite um valor: ");
        scanf("%d", &valor);
    }

    system("PAUSE");
    return 0;
}