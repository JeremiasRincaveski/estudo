#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(void)
{
    int valor[5] = {0, 0, 0, 0, 0}, aux;

    for (int i = 0; i < 5; i++)
    {
        printf("digite um valor: ");
        scanf("%d", valor[i]);
    }
    printf("%d", valor[3]);
}