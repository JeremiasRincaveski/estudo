#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

int main(void)
{
    int c, f;
    printf("Escreva a temperatura em Celsius: ");
    scanf("%d",&c);
    f = (9 * c + 160) / 5;
    printf("Temperatura em f: %d\n",f);

    system("PAUSE");
    return 0;
}