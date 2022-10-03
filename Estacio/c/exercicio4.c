#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>
#include<math.h>

int main(void)
{
    double valor, raiz;
    printf("digite o valor: ");
    scanf("%lf",&valor);
    raiz = sqrt(valor);
    printf("A raiz de: %.1lf e: %.1lf\n",valor,raiz);

    system("PAUSE");
    return 0;
}